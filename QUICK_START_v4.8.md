# World-Forge v4.8 - Quick Start Guide

## What's New in v4.8

### ✅ Custom Background Persistence
Your custom backgrounds now save automatically and persist when you reopen the app!

**How to use:**
1. Open the Map Builder
2. Click the 🖼️ Background button
3. Click "Custom" and upload your image
4. Your background is automatically saved
5. Close and reopen the app - your background is still there!

### ✅ Unlimited Asset Storage
Assets are now stored in your browser's IndexedDB, removing the 50-asset limit!

**What this means:**
- No more "Asset Limit Reached" messages
- Add as many custom assets as you need
- All 246 built-in assets load faster
- Works offline with PWA

## First Time Setup

### Automatic Asset Import
The first time you open v4.8, the app will:
1. Detect that assets need to be imported
2. Convert all 246 assets to IndexedDB storage
3. Show progress in the browser console (F12)
4. Complete in about 30-60 seconds

**To view progress:**
1. Press F12 to open Developer Tools
2. Click the "Console" tab
3. Watch for messages like "Progress: 50/246"

### After First Load
- Assets load instantly from IndexedDB
- No re-import needed
- Works offline

## Testing Your Installation

### Test Custom Background Persistence
1. Open Map Builder
2. Upload a custom background
3. Click "Save Map"
4. Close the browser tab
5. Reopen the app
6. Open the same world
7. ✅ Your custom background should be there!

### Test Asset Storage
1. Open Map Builder
2. Click 🎨 Assets button
3. Try adding 50+ assets to your map
4. ✅ No limit warning should appear!

## Troubleshooting

### Custom Background Not Saving
**Solution:** Make sure to click "Save Map" after uploading a custom background.

### Assets Not Loading
**Solution:** 
1. Open browser console (F12)
2. Look for IndexedDB errors
3. If you see errors, the app will fallback to file loading
4. Clear browser cache and reload

### First Load Takes Long
**Normal:** The first load imports 246 assets (~129MB) into IndexedDB. This only happens once.

### Storage Space Warning
**If you see a storage quota warning:**
1. Your browser may have limited IndexedDB space
2. The app will still work with file-based loading
3. Consider clearing browser data for other sites

## Browser Compatibility

### Fully Supported
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 14+
- ✅ Edge 80+

### Features
- ✅ IndexedDB storage
- ✅ Custom background persistence
- ✅ PWA offline mode
- ✅ Service Worker caching

## Storage Information

### What's Stored Where

| Data Type | Storage Method | Size | Persistence |
|-----------|---------------|------|-------------|
| World data | localStorage | ~5-10MB | Permanent |
| Custom backgrounds | localStorage (base64) | Varies | Permanent |
| Built-in assets | IndexedDB | ~172MB | Permanent |
| Custom assets | localStorage (base64) | Varies | Permanent |
| Placed assets | localStorage (references) | Small | Permanent |

### Clearing Storage
**To reset everything:**
1. Open Developer Tools (F12)
2. Go to Application tab
3. Click "Clear storage"
4. Check all boxes
5. Click "Clear site data"

**Or use the app:**
1. Click ⚙️ Settings
2. Click "Clear All Data"
3. Confirm

## Performance Tips

### Optimize Custom Backgrounds
- Use compressed images (JPEG for photos, PNG for graphics)
- Keep under 5MB for best performance
- The app auto-compresses to 10MB max

### Optimize Custom Assets
- Use transparent PNGs for best results
- Keep individual assets under 1MB
- The app auto-compresses with quality 0.6

### Browser Performance
- Close other tabs to free memory
- Use Chrome/Edge for best IndexedDB performance
- Enable hardware acceleration in browser settings

## Advanced Features

### Viewing IndexedDB Storage
1. Open Developer Tools (F12)
2. Go to Application tab
3. Expand "IndexedDB"
4. Click "WorldForgeAssets"
5. Click "assets" to see stored assets

### Manual Asset Import
If you want to manually trigger asset import:
```javascript
// In browser console (F12)
await AssetDB.clearAllAssets();
await AssetLoader.importAllAssets();
```

### Check Storage Info
```javascript
// In browser console (F12)
const info = await AssetDB.getStorageInfo();
console.log(`Assets stored: ${info.assetCount}`);
```

## Known Limitations

### localStorage Quota
- Most browsers: 5-10MB
- Custom backgrounds count toward this
- If you hit the limit, remove old worlds or custom assets

### IndexedDB Quota
- Default: ~50MB (can request more)
- Current usage: ~172MB for all assets
- Browser may prompt for permission

### Browser Private/Incognito Mode
- IndexedDB may not persist
- Use normal browsing mode for best experience

## Getting Help

### Check Console for Errors
1. Press F12
2. Click "Console" tab
3. Look for red error messages
4. Copy error text for troubleshooting

### Common Error Messages

**"Failed to open IndexedDB"**
- Solution: Check browser permissions
- Fallback: App will use file loading

**"QuotaExceededError"**
- Solution: Clear other site data
- Or: Request more storage quota

**"Custom background not found"**
- Solution: Re-upload the background
- Make sure to click "Save Map"

## Version History

- **v4.8** - Custom background persistence + IndexedDB asset storage
- **v4.7** - Storage optimization
- **v4.6** - UI fixes
- **v4.4** - Save bug fixes

## Next Steps

1. ✅ Test custom background persistence
2. ✅ Add more than 50 assets to a map
3. ✅ Try offline mode (PWA)
4. ✅ Explore all asset categories
5. ✅ Build your world!

---

**Enjoy building with World-Forge v4.8!** 🎨🗺️✨
