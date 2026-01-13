# World-Forge v4.9.0 - Release Notes

## Release Date
January 11, 2026

## Major Changes

### 🗑️ Removed Custom Background Upload Feature
**Custom background upload has been completely removed from the application.**

**What was removed:**
- Custom background upload button in background picker
- File input for custom background selection
- `handleCustomBackgroundUpload()` function
- Custom background loading from saved data
- Custom background rendering in map and export
- Custom background save functionality

**Why removed:**
- Simplified user experience
- Reduced complexity in background management
- Focus on built-in, curated backgrounds

**Built-in backgrounds still available:**
- Winter
- Desert
- Forest
- Ocean
- Mountain
- Volcanic
- Mystical
- Grassland

---

### 🌳 Added 9 New Assets to Normal Tab
**Added 4 trees, 4 bushes, and 1 blimp to the Normal theme!**

#### New Tree Assets (4)
1. **Oak Tree** - Thick trunk with full, rounded canopy of dark green leaves
2. **Pine Tree** - Tall evergreen with narrow triangular shape
3. **Willow Tree** - Graceful weeping willow with drooping branches
4. **Maple Tree** - Broad, spreading canopy with bright green leaves

#### New Bush Assets (4)
5. **Round Bush** - Small, perfectly spherical decorative bush
6. **Flowering Bush** - Colorful bush with pink flowers
7. **Hedge Bush** - Neatly trimmed rectangular hedge
8. **Wild Bush** - Natural-looking bush with irregular shape

#### New Vehicle Asset (1)
9. **Blimp** - Large vintage airship with silver-gray body and red fins

**Asset locations:**
- Trees & Bushes: `assets/normal/nature/`
- Blimp: `assets/normal/vehicles/`

**Total Normal assets:** 57 (48 existing + 9 new)

---

## Technical Details

### Files Modified

#### 1. `app.js`
**Removed:**
- Lines 1900-1905: Custom background button and file input from background picker
- Lines 4252-4305: `handleCustomBackgroundUpload()` function
- Lines 3323-3333: Custom background loading in `init()`
- Lines 4829-4831: Custom background save in `saveMap()`
- Lines 4853-4855: Custom background save in `saveState()`
- Lines 4719-4741: Custom background rendering in `render()`
- Lines 4918-4938: Custom background rendering in export

**Added:**
- Lines 4397-4399: 9 new asset paths to normal theme array

#### 2. `assets-manifest.js`
**Added:**
- Lines 47-55: 9 new asset filenames to normal array

#### 3. New Asset Files
**Created:**
- `assets/normal/nature/oak_tree.png`
- `assets/normal/nature/pine_tree.png`
- `assets/normal/nature/willow_tree.png`
- `assets/normal/nature/maple_tree.png`
- `assets/normal/nature/round_bush.png`
- `assets/normal/nature/flowering_bush.png`
- `assets/normal/nature/hedge_bush.png`
- `assets/normal/nature/wild_bush.png`
- `assets/normal/vehicles/blimp.png`

---

## User Experience Changes

### Before v4.9.0
```
Background Picker:
- 8 built-in backgrounds
- Custom background upload option (📁 button)
- Custom backgrounds persisted

Normal Assets:
- 48 assets total
```

### After v4.9.0
```
Background Picker:
- 8 built-in backgrounds only
- No custom upload option
- Simplified interface

Normal Assets:
- 57 assets total (9 new!)
- 4 new tree varieties
- 4 new bush types
- 1 blimp vehicle
```

---

## Asset Details

### Tree Assets
All trees are rendered in isometric view at 45-degree angle with transparent backgrounds.

| Asset | Description | Style |
|-------|-------------|-------|
| Oak Tree | Mature tree with thick trunk and full canopy | Realistic, dense foliage |
| Pine Tree | Tall coniferous evergreen | Classic triangular shape |
| Willow Tree | Elegant tree with drooping branches | Flowing, graceful |
| Maple Tree | Wide spreading canopy | Umbrella-like crown |

### Bush Assets
All bushes are approximately 1/4 the size of trees, suitable for landscaping.

| Asset | Description | Style |
|-------|-------------|-------|
| Round Bush | Perfectly spherical decorative bush | Neatly trimmed |
| Flowering Bush | Bush with pink flowers | Colorful, decorative |
| Hedge Bush | Rectangular box-shaped hedge | Formal, manicured |
| Wild Bush | Irregular natural bush | Untamed, organic |

### Vehicle Asset
| Asset | Description | Style |
|-------|-------------|-------|
| Blimp | Vintage airship with gondola | Detailed, majestic |

---

## Migration Notes

### For Existing Users

**Custom Backgrounds:**
- Any custom backgrounds previously uploaded will no longer load
- Maps will default to the last selected built-in background
- If no built-in background was set, defaults to "winter"
- **Action Required:** If you relied on custom backgrounds, recreate your maps with built-in backgrounds

**Normal Assets:**
- All existing Normal assets remain unchanged
- 9 new assets are immediately available in the Normal tab
- No data migration required for assets

### For Developers

**Background System:**
- `currentBackground` now only accepts built-in background names
- No need to check for 'custom' background type
- Simplified background rendering logic
- `customBackgroundDataURL` and `customBackgroundImage` variables removed

**Asset Loading:**
- New assets automatically loaded via `assetFiles.normal` array
- Asset paths follow existing convention: `normal/category/filename.png`
- No special handling required for new assets

---

## Breaking Changes

### ⚠️ Custom Background Data Loss
**Impact:** Users who previously uploaded custom backgrounds will lose them.

**Reason:** Custom background feature completely removed.

**Workaround:** 
1. Before upgrading, export your map as PNG (if custom background is important)
2. After upgrading, use one of the 8 built-in backgrounds
3. If needed, recreate the map design with built-in backgrounds

### ⚠️ localStorage Data
**Impact:** `customBackgroundDataURL` field in saved worlds is now ignored.

**Reason:** Custom background loading code removed.

**Result:** No errors, but custom background data is orphaned in localStorage.

---

## Testing Completed

- [x] Custom background button removed from UI
- [x] No custom background upload functionality
- [x] Built-in backgrounds still work
- [x] 9 new assets appear in Normal tab
- [x] New tree assets render correctly
- [x] New bush assets render correctly
- [x] Blimp asset renders correctly
- [x] Asset placement works for new assets
- [x] Asset resizing works for new assets
- [x] Asset rotation works for new assets
- [x] Map export includes new assets
- [x] JavaScript syntax valid
- [x] No console errors

---

## Performance Notes

### Asset Loading
- 9 new assets add ~60MB to total asset size
- IndexedDB handles the additional assets without issue
- First load will import new assets automatically
- No performance degradation observed

### Background Rendering
- Simplified background rendering (no custom background checks)
- Slight performance improvement from removed conditional logic
- Export function simplified

---

## Known Limitations

### Custom Backgrounds
- ❌ No longer supported
- ❌ Cannot upload custom background images
- ✅ 8 built-in backgrounds available

### Asset Limits
- ✅ Unlimited placed assets (from v4.8.1)
- ⚠️ 20 custom asset limit (user-uploaded assets, not affected by this update)
- ✅ 246 built-in assets across all themes
- ✅ 57 assets in Normal theme specifically

---

## Future Enhancements

### Potential Additions
1. **More Normal Assets** - Additional vehicles, buildings, nature elements
2. **Asset Categories** - Organize Normal assets by subcategory
3. **Asset Search** - Search/filter assets by name or type
4. **Asset Favorites** - Mark frequently used assets
5. **Background Customization** - Adjust brightness/contrast of built-in backgrounds

---

## Version History

- **v4.9.0** - Removed custom backgrounds + added 9 normal assets
- **v4.8.1** - Auto-save backgrounds + unlimited placed assets + UI cleanup
- **v4.8.0** - Custom background persistence + IndexedDB storage
- **v4.7** - Storage optimization
- **v4.6** - UI fixes

---

## Support

### Common Questions

**Q: Where did my custom background go?**
A: Custom background upload feature was removed in v4.9.0. Use one of the 8 built-in backgrounds instead.

**Q: Can I still upload custom assets?**
A: Yes! Custom asset upload (via the Custom tab) is still available. Only custom *backgrounds* were removed.

**Q: How do I use the new Normal assets?**
A: Open the Assets picker, click the "Normal" tab, and scroll to see the 9 new assets at the bottom.

**Q: Will my existing maps still work?**
A: Yes, all existing maps work. If they used a custom background, they'll default to a built-in background.

---

**Enjoy the new Normal assets in World-Forge v4.9.0!** 🌳🌿🎈
