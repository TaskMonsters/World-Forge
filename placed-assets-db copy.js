// ========================================
// PLACED ASSETS INDEXEDDB MANAGER
// Stores placed asset data in IndexedDB for unlimited storage
// Only references are stored in localStorage
// ========================================

const PlacedAssetsDB = {
  db: null,
  DB_NAME: 'WorldForgePlacedAssets',
  DB_VERSION: 1,
  STORE_NAME: 'placedAssets',
  
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      
      request.onerror = () => {
        console.error('Failed to open PlacedAssetsDB:', request.error);
        reject(request.error);
      };
      
      request.onsuccess = () => {
        this.db = request.result;
        console.log('PlacedAssetsDB initialized successfully');
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          const objectStore = db.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
          objectStore.createIndex('worldId', 'worldId', { unique: false });
          console.log('PlacedAssets store created');
        }
      };
    });
  },
  
  async saveAsset(worldId, asset) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      
      const assetData = {
        id: asset.id,
        worldId: worldId,
        x: asset.x,
        y: asset.y,
        width: asset.width,
        height: asset.height,
        rotation: asset.rotation || 0,
        data: asset.data, // base64 image data
        filename: asset.filename || '',
        name: asset.name || '',
        timestamp: Date.now()
      };
      
      const request = store.put(assetData);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },
  
  async getAsset(assetId) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.get(assetId);
      
      request.onsuccess = () => {
        resolve(request.result || null);
      };
      request.onerror = () => reject(request.error);
    });
  },
  
  async getAllAssetsForWorld(worldId) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const index = store.index('worldId');
      const request = index.getAll(worldId);
      
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  },
  
  async deleteAsset(assetId) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.delete(assetId);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },
  
  async deleteAllAssetsForWorld(worldId) {
    if (!this.db) await this.init();
    
    return new Promise(async (resolve, reject) => {
      try {
        const assets = await this.getAllAssetsForWorld(worldId);
        const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);
        
        assets.forEach(asset => {
          store.delete(asset.id);
        });
        
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      } catch (error) {
        reject(error);
      }
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
  }
};

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    PlacedAssetsDB.init().catch(console.error);
  });
} else {
  PlacedAssetsDB.init().catch(console.error);
}
