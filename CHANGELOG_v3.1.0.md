# WorldForge v3.1.0 - Changelog

## 🎯 Release Summary

This major update adds extensive genre options for world creation and fixes the background image display to prevent cropping of important visual elements like the mountain in the forest background.

**Release Date:** December 30, 2025  
**Version:** 3.1.0  
**Previous Version:** 3.0.9

---

## ✨ New Features

### 1. **Expanded Genre Selection** 🎭

The world creation form now includes **30 genre options** (up from 6), giving authors and game designers much more flexibility in categorizing their worlds.

#### New Genres Added (24 total):
- Mystery
- Romance
- Western
- Cyberpunk
- Steampunk
- Post-Apocalyptic
- Dystopian
- Urban Fantasy
- Dark Fantasy
- Space Opera
- Military
- Supernatural
- Noir
- Comedy
- Drama
- Mythology
- Fairy Tale
- Gothic
- Survival
- Alternate History
- Time Travel
- Cosmic Horror
- Sword & Sorcery
- Superhero

#### Original Genres (6):
- Fantasy
- Sci-Fi
- Horror
- Thriller
- Adventure
- Historical

**Total Genres:** 30

---

## 🐛 Bug Fixes

### 2. **Background Image Cropping Fix** 🖼️

**Problem:** The forest background image was being cropped, cutting off the mountain and other important visual elements.

**Solution:** Changed the background rendering from "cover" mode to "contain" mode, ensuring the entire image is visible without cropping.

#### Technical Details

**File Modified:** `app.js` (lines 2687-2715)

**Behavior Change:**

| Aspect | Before (Cover) | After (Contain) |
|--------|----------------|-----------------|
| Image Display | Fills entire canvas | Fits entire image within canvas |
| Cropping | May crop edges | No cropping |
| Mountain Visibility | Often cut off | Always fully visible |
| Letterboxing | None | May have gray bars if aspect ratios differ |
| Background Fill | Image only | Gray (#e5e5e5) + centered image |

**Implementation:**
```javascript
// Calculate scaling to fit the entire image within the canvas
const imgRatio = img.width / img.height;
const canvasRatio = width / height;

let drawWidth, drawHeight;
if (canvasRatio > imgRatio) {
  // Canvas is wider - fit to height
  drawHeight = height;
  drawWidth = height * imgRatio;
} else {
  // Canvas is taller - fit to width
  drawWidth = width;
  drawHeight = width / imgRatio;
}

// Center the image
const offsetX = (width - drawWidth) / 2;
const offsetY = (height - drawHeight) / 2;

// Fill background with neutral color first
ctx.fillStyle = '#e5e5e5';
ctx.fillRect(0, 0, width, height);

// Draw the image centered and fully visible
ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
```

---

## 📊 Impact Summary

### Genre Options
- **Before:** 6 genres
- **After:** 30 genres
- **Increase:** 400% more options

### Background Display
- **Before:** Cropped images (cover mode)
- **After:** Full images visible (contain mode)
- **Benefit:** All visual elements preserved, especially important for detailed backgrounds like the forest with mountain

---

## 🎨 Visual Improvements

### Forest Background Example

**Before:**
- Mountain partially or fully cropped
- Image fills entire canvas
- Loss of important visual details

**After:**
- Mountain fully visible ⛰️
- Entire image displayed
- Gray letterboxing if needed
- Professional, complete presentation

---

## 🧪 Testing

Two test files are included to verify the changes:

### 1. `test_background.html`
- Original test file for cover mode
- Shows previous behavior

### 2. `test_background_contain.html` (NEW)
- Demonstrates contain mode
- Shows complete image without cropping
- Includes comparison table
- Visual confirmation of mountain visibility

---

## 📦 Files Modified

### Core Application
1. **app.js**
   - Lines 2687-2715: Background rendering logic (contain mode)
   - Lines 3035-3126: Genre checkbox options (30 genres)

### New Files
1. **test_background_contain.html** - Visual test for contain mode
2. **CHANGELOG_v3.1.0.md** - This file

### Updated Files
1. **UPDATE_NOTES_v3.0.9.md** - Previous update notes (still valid)
2. **BACKGROUND_UPDATE_NOTES.md** - Original background update notes

---

## 🚀 Upgrade Instructions

1. **Backup your current installation** (if you have custom modifications)
2. Extract `worldforge-v3.1.0-FINAL.zip`
3. Replace your existing WorldForge directory
4. Open `index.html` in your browser
5. Test the new genre options and background display

**Note:** All saved maps will continue to work. No data migration needed.

---

## 💡 Usage Tips

### Genre Selection
- You can select **multiple genres** for your world
- Mix and match to create unique combinations (e.g., "Cyberpunk + Noir + Thriller")
- More specific genres help with world organization and theme consistency

### Background Display
- All backgrounds now use contain mode
- If you see gray bars, that's normal - it means the entire image is visible
- The forest background will always show the complete mountain
- Works with all 8 background types:
  - Winter
  - Desert
  - Ocean
  - Forest (with mountain fully visible!)
  - Mountain
  - Volcanic
  - Mystical
  - Grassland

---

## 🔄 Compatibility

- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)
- **Backward Compatibility:** All existing saved maps work without modification
- **localStorage:** Genre data automatically saved with worlds
- **Export Formats:** PDF and JSON exports include new genre data

---

## 🎯 Future Enhancements

Potential improvements for future versions:
- Toggle between "cover" and "contain" modes per user preference
- Custom background upload
- Genre-specific asset recommendations
- Genre-based color scheme suggestions

---

## 📞 Support

For issues, questions, or feedback:
- Check the included test files to verify functionality
- Review the UPDATE_NOTES files for additional context
- Ensure you're using a modern browser with JavaScript enabled

---

**Thank you for using WorldForge!** 🌍✨

*Building immersive worlds, one map at a time.*
