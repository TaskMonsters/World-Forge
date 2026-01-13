# World-Forge v5.0.1 - HOTFIX: Asset Visibility

**Release Date**: January 11, 2026  
**Type**: Critical Hotfix - Asset Loading

---

## 🐛 The Bug

In v5.0.0, placed assets were not visible on the map. Console showed:
```
GET file:///Users/.../World-Forge2022/normal/nature/round_bush.png net::ERR_FILE_NOT_FOUND
```

---

## 🔍 Root Cause

**Line 4532** in `selectAsset()`:
```javascript
assetBtn.onclick = () => this.selectAsset(assetPath, filename);
```

- `assetPath` = `"assets/fantasy/buildings_residential/villa.png"` ✅
- `filename` = `"fantasy/buildings_residential/villa.png"` ❌ (missing `assets/` prefix)

When placing the asset:
```javascript
filename: this.selectedAsset.filename || '', // Stored "fantasy/..." without "assets/"
```

When rendering:
```javascript
const imgSrc = asset.isBuiltIn ? asset.filename : asset.data;
img.src = imgSrc; // Tried to load "fantasy/..." which doesn't exist!
```

---

## ✅ The Fix

**Line 4532** - Pass `assetPath` as both parameters:
```javascript
assetBtn.onclick = () => this.selectAsset(assetPath, assetPath); // Both include "assets/" prefix
```

Now when placing:
```javascript
filename: "assets/fantasy/buildings_residential/villa.png" ✅
```

When rendering:
```javascript
img.src = "assets/fantasy/buildings_residential/villa.png" ✅ Loads correctly!
```

---

## 📦 Files Modified

**app.js**:
- Line 4532: Fixed `selectAsset()` call to pass `assetPath` for both parameters

---

## ✅ Verification

1. Open Map Builder
2. Click "Assets" button
3. Select any built-in asset (e.g., villa, tree, bush)
4. Click on map to place asset
5. **Asset should now be visible** ✅

---

## 🎉 Status

**FIXED** ✅  
Assets now load and display correctly on the map!
