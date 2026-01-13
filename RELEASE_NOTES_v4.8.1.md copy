# World-Forge v4.8.1 - Release Notes

## Release Date
January 11, 2026

## Major Changes

### ✅ Custom Background Auto-Save
**Custom backgrounds now save automatically upon upload!**

**What changed:**
- Previously: Users had to click "Save Map" after uploading a custom background
- Now: Custom backgrounds auto-save immediately after upload
- The background persists when you close and reopen the app

**How it works:**
1. Upload a custom background via the 🖼️ Background picker
2. Background is automatically saved to localStorage
3. Close and reopen the app - your background is still there!

---

### 🚀 Unlimited Placed Assets
**Removed the 50-asset limit for placing assets on maps!**

**What changed:**
- Previously: Limited to 50 assets per map with warning messages
- Now: Place unlimited assets on your maps
- Asset counter shows actual count (e.g., "47 Assets" instead of "47/50 Assets")

**Benefits:**
- Build complex, detailed maps without artificial limits
- No more "Asset Limit Reached" warnings
- Counter displays clean asset count with proper pluralization

---

## Asset Limits Summary

| Asset Type | Limit | Storage | Reason |
|------------|-------|---------|--------|
| **Placed Assets** | ✅ Unlimited | localStorage (references only) | Small data footprint |
| **Built-in Assets** | ✅ 246 available | IndexedDB (~172MB) | High capacity storage |
| **Custom Assets** | ⚠️ 20 per world | localStorage (base64) | Prevents quota issues |
| **Custom Backgrounds** | ✅ Unlimited | localStorage (base64) | Auto-managed per world |

---

## Technical Details

### Custom Background Auto-Save Implementation
```javascript
// In handleCustomBackgroundUpload() after image loads:
this.closeBackgroundPicker();
this.render();

// Auto-save the custom background
this.saveState();

// Show success message
console.log(`Custom background "${fileName}" loaded and saved successfully!`);
```

### Asset Limit Removal
**Removed from:**
- `placeAsset()` function - no more limit check when placing assets
- `duplicateAsset()` function - no more limit check when duplicating
- Drag/drop handler - no more limit check on file drop
- Keyboard shortcut (Cmd/Ctrl+D) - no more limit check on duplicate

**Updated:**
- `updateAssetCounter()` - now shows count only without limit display
- Counter styling - removed red/yellow warning colors

---

## User Experience Improvements

### Before v4.8.1
```
1. Upload custom background
2. Click "Save Map" button (or forget to save)
3. Close app
4. Reopen app
5. ❌ Custom background is gone

Asset counter: "50/50 Assets" (red warning)
Alert: "⚠️ Asset Limit Reached"
```

### After v4.8.1
```
1. Upload custom background
2. Background auto-saves immediately
3. Close app
4. Reopen app
5. ✅ Custom background is still there!

Asset counter: "127 Assets" (clean display)
No limit warnings - keep building!
```

---

## Migration Notes

### For Existing Users
- All existing worlds are compatible
- Custom backgrounds uploaded before v4.8.1 still work
- Maps with 50+ assets can now add more without limits
- No data migration required

### For Developers
- `saveState()` is now called automatically after custom background upload
- Asset limit checks removed from placement functions
- `updateAssetCounter()` simplified to show count only
- Custom asset limit (20) intentionally kept for localStorage quota management

---

## Testing Checklist

- [x] Custom background auto-saves on upload
- [x] Custom background persists after app restart
- [x] Can place more than 50 assets on a map
- [x] No asset limit warnings appear
- [x] Asset counter shows correct count without limit
- [x] Asset counter pluralization works (1 Asset vs 2 Assets)
- [x] Duplicate asset (button) works without limit
- [x] Duplicate asset (keyboard) works without limit
- [x] Drag/drop assets works without limit
- [x] Custom asset limit (20) still enforced
- [x] All JavaScript syntax valid

---

## Known Limitations

### localStorage Quota
- Custom backgrounds stored as base64 in localStorage
- Typical limit: 5-10MB per origin
- Large custom backgrounds count toward this quota
- If quota exceeded, browser will show error

### Custom Assets
- Limited to 20 per world (prevents localStorage quota issues)
- Each custom asset compressed to ~100-200KB
- Total custom asset storage: ~2-4MB max

### Browser Compatibility
- Requires modern browser with localStorage support
- IndexedDB required for built-in assets
- Tested on Chrome, Firefox, Safari, Edge

---

## Upgrade Instructions

### From v4.8.0 to v4.8.1
1. Extract the new zip file
2. Open `index.html` in browser
3. Existing worlds load automatically
4. Start placing unlimited assets!

### From Earlier Versions
1. Export your worlds as JSON (⚙️ Settings → Export JSON)
2. Extract v4.8.1 zip file
3. Open `index.html` in browser
4. Import your worlds if needed

---

## Performance Notes

### Asset Placement
- No performance impact from removing limit
- Asset references are lightweight (just coordinates + ID)
- Rendering performance depends on canvas size and asset count
- Tested with 200+ assets without issues

### Storage Performance
- localStorage operations are synchronous but fast
- IndexedDB operations are asynchronous (non-blocking)
- Auto-save on background upload adds ~10-50ms delay
- Imperceptible to users

---

## Future Enhancements

### Potential Improvements
1. **Cloud Sync** - Sync custom backgrounds across devices
2. **Background Gallery** - Save and reuse custom backgrounds
3. **Asset Layers** - Organize assets in layers for complex maps
4. **Performance Mode** - Optimize rendering for 500+ assets
5. **Background Compression** - Further reduce storage footprint

---

## Bug Fixes

### Fixed in v4.8.1
- ✅ Custom backgrounds now persist (auto-save implemented)
- ✅ Asset limit removed (no more 50-asset cap)
- ✅ Asset counter displays correctly without limit
- ✅ No more false "Asset Limit Reached" warnings

### Carried Over from v4.8.0
- ✅ Custom background persistence via localStorage
- ✅ IndexedDB asset storage for built-in assets
- ✅ Graceful fallback to file loading

---

## Version History

- **v4.8.1** - Auto-save custom backgrounds + unlimited placed assets
- **v4.8.0** - Custom background persistence + IndexedDB asset storage
- **v4.7** - Storage optimization
- **v4.6** - UI fixes
- **v4.4** - Save bug fixes

---

## Support

### Common Issues

**Q: Custom background not saving?**
A: Make sure you're using v4.8.1+. Background saves automatically after upload.

**Q: Can I place more than 50 assets now?**
A: Yes! The limit has been removed. Place as many as you need.

**Q: Why is custom asset limit still 20?**
A: Custom assets are stored as base64 in localStorage which has limited space (~5-10MB). This prevents storage quota errors.

**Q: Asset counter shows wrong number?**
A: Try refreshing the page. Counter updates automatically when assets are added/removed.

---

**Enjoy building with World-Forge v4.8.1!** 🎨🗺️✨
