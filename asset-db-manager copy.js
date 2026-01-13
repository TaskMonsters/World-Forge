// ========================================
// INDEXEDDB ASSET MANAGER
// Stores assets in IndexedDB for unlimited storage
// ========================================

const AssetDB = {
  db: null,
  DB_NAME: 'WorldForgeAssets',
  DB_VERSION: 1,
  STORE_NAME: 'assets',
  
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      
      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };
      
      request.onsuccess = () => {
        this.db = request.result;
        console.log('IndexedDB initialized successfully');
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          const objectStore = db.createObjectStore(this.STORE_NAME, { keyPath: 'path' });
          objectStore.createIndex('category', 'category', { unique: false });
          objectStore.createIndex('genre', 'genre', { unique: false });
          console.log('Asset store created');
        }
      };
    });
  },
  
  async storeAsset(path, dataURL, metadata = {}) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      
      const assetData = {
        path: path,
        dataURL: dataURL,
        category: metadata.category || 'unknown',
        genre: metadata.genre || 'unknown',
        timestamp: Date.now()
      };
      
      const request = store.put(assetData);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },
  
  async getAsset(path) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.get(path);
      
      request.onsuccess = () => {
        resolve(request.result ? request.result.dataURL : null);
      };
      request.onerror = () => reject(request.error);
    });
  },
  
  async hasAsset(path) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.get(path);
      
      request.onsuccess = () => resolve(!!request.result);
      request.onerror = () => reject(request.error);
    });
  },
  
  async getAllAssetPaths() {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.getAllKeys();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },
  
  async getStorageInfo() {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.count();
      
      request.onsuccess = () => {
        resolve({
          assetCount: request.result,
          dbName: this.DB_NAME
        });
      };
      request.onerror = () => reject(request.error);
    });
  },
  
  async clearAllAssets() {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.clear();
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },
  
  // Batch import assets from file system
  async importAssetsFromFileSystem(assetPaths) {
    const results = {
      success: 0,
      failed: 0,
      skipped: 0,
      errors: []
    };
    
    for (const path of assetPaths) {
      try {
        // Check if already stored
        const exists = await this.hasAsset(path);
        if (exists) {
          results.skipped++;
          continue;
        }
        
        // Load and convert to data URL
        const dataURL = await this.loadAssetAsDataURL(path);
        
        // Extract metadata from path
        const metadata = this.extractMetadataFromPath(path);
        
        // Store in IndexedDB
        await this.storeAsset(path, dataURL, metadata);
        results.success++;
        
      } catch (error) {
        results.failed++;
        results.errors.push({ path, error: error.message });
      }
    }
    
    return results;
  },
  
  loadAssetAsDataURL(path) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        try {
          const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => reject(new Error(`Failed to load: ${path}`));
      img.src = path;
    });
  },
  
  extractMetadataFromPath(path) {
    const parts = path.split('/');
    const genre = parts[1] || 'unknown'; // e.g., 'fantasy', 'scifi'
    const category = parts[2] || 'unknown'; // e.g., 'buildings', 'trees'
    
    return { genre, category };
  }
};
