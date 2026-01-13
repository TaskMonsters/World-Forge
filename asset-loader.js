// ========================================
// ASSET LOADER WITH INDEXEDDB CACHING
// Automatically loads assets from filesystem into IndexedDB
// Then serves them from IndexedDB for unlimited storage
// ========================================

const AssetLoader = {
  initialized: false,
  loadingProgress: 0,
  totalAssets: 0,
  
  async init() {
    if (this.initialized) return;
    
    try {
      // Initialize IndexedDB
      await AssetDB.init();
      
      // Check if assets are already loaded
      const info = await AssetDB.getStorageInfo();
      
      if (info.assetCount > 0) {
        console.log(`✅ Assets already loaded: ${info.assetCount} assets in IndexedDB`);
        this.initialized = true;
        return;
      }
      
      // First time - need to import assets
      console.log('📦 First time setup: Loading assets into IndexedDB...');
      await this.importAllAssets();
      
      this.initialized = true;
      console.log('✅ Asset initialization complete!');
      
    } catch (error) {
      console.error('Failed to initialize assets:', error);
      // Fallback to direct file loading
      this.initialized = true;
    }
  },
  
  async importAllAssets() {
    // Get all asset paths from the file system
    const assetPaths = await this.discoverAssets();
    this.totalAssets = assetPaths.length;
    
    console.log(`Found ${this.totalAssets} assets to import`);
    
    // Import in batches to avoid blocking
    const batchSize = 10;
    for (let i = 0; i < assetPaths.length; i += batchSize) {
      const batch = assetPaths.slice(i, i + batchSize);
      await Promise.all(batch.map(path => this.importAsset(path)));
      this.loadingProgress = Math.min(i + batchSize, assetPaths.length);
      console.log(`Progress: ${this.loadingProgress}/${this.totalAssets}`);
    }
  },
  
  async discoverAssets() {
    // This will be populated by scanning the assets directory
    // For now, we'll use a predefined list based on the directory structure
    const genres = ['fantasy', 'scifi', 'modern'];
    const categories = [
      'buildings_residential',
      'buildings_commercial', 
      'buildings_public',
      'roads',
      'trees',
      'greenery',
      'special'
    ];
    
    const paths = [];
    
    // Background assets
    const backgrounds = [
      'assets/backgrounds/winter_snow.png',
      'assets/backgrounds/desert_sand.png',
      'assets/backgrounds/ocean_water.png',
      'assets/backgrounds/forest_jungle_green.png',
      'assets/backgrounds/mountain_stone.png',
      'assets/backgrounds/volcanic_lava.png',
      'assets/backgrounds/mystical_purple.png',
      'assets/backgrounds/grassland_plains.png'
    ];
    paths.push(...backgrounds);
    
    // Try to fetch asset list from server if available
    // Otherwise use a static manifest
    try {
      const response = await fetch('asset-list.json');
      if (response.ok) {
        const assetList = await response.json();
        paths.push(...assetList);
        return paths;
      }
    } catch (e) {
      // Fall through to manual discovery
    }
    
    // Manual discovery - scan known structure
    for (const genre of genres) {
      for (const category of categories) {
        // We'll need to try loading and see what exists
        // This is a limitation of browser environment
      }
    }
    
    return paths;
  },
  
  async importAsset(path) {
    try {
      const dataURL = await AssetDB.loadAssetAsDataURL(path);
      const metadata = AssetDB.extractMetadataFromPath(path);
      await AssetDB.storeAsset(path, dataURL, metadata);
    } catch (error) {
      console.warn(`Failed to import ${path}:`, error.message);
    }
  },
  
  async getAsset(path) {
    // Try IndexedDB first
    try {
      const dataURL = await AssetDB.getAsset(path);
      if (dataURL) return dataURL;
    } catch (error) {
      console.warn('IndexedDB lookup failed, falling back to direct load:', error);
    }
    
    // Fallback to direct file path
    return path;
  },
  
  // Enhanced asset loading for MapBuilder
  async loadAssetImage(path) {
    const src = await this.getAsset(path);
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load: ${path}`));
      img.src = src;
    });
  }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    AssetLoader.init().catch(console.error);
  });
} else {
  AssetLoader.init().catch(console.error);
}
