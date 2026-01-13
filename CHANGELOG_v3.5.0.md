# WorldForge v3.5.0 - Changelog

## 🎯 Release Summary

**Major Feature:** Custom background upload capability added! Users can now upload their own background images.

**Release Date:** December 30, 2025  
**Version:** 3.5.0  
**Previous Version:** 3.4.0

---

## ✨ New Features

### 📁 **Custom Background Upload**

Users can now upload their own custom background images for complete creative control!

#### Features
- ✅ Upload any image file (PNG, JPG, JPEG, WEBP)
- ✅ Automatic validation (file type and size)
- ✅ Maximum file size: 10MB
- ✅ Cover mode rendering (fills entire canvas)
- ✅ Easy access via "Custom" button in background picker
- ✅ Instant preview and application

#### How to Use

1. Click the **"🖼️ Background"** button in the map builder
2. Click the **"📁 Custom"** button (purple gradient with dashed border)
3. Select an image file from your computer
4. The image will be immediately applied as your map background

#### Supported Formats
- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)
- WebP (`.webp`)

#### Limitations
- Maximum file size: **10MB**
- One custom background at a time (uploading a new one replaces the previous)
- Custom backgrounds are not saved with maps (session-only)

---

## 🎨 Technical Implementation

### UI Changes

**New Button in Background Picker:**
```html
<button class="background-option" onclick="document.getElementById('customBackgroundUpload').click()" 
        style="border: 2px dashed var(--black);">
  <div class="background-preview" 
       style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              display: flex; align-items: center; justify-content: center; 
              font-size: 2rem;">📁</div>
  <span>Custom</span>
</button>
```

**Hidden File Input:**
```html
<input type="file" id="customBackgroundUpload" 
       accept="image/png,image/jpeg,image/jpg,image/webp" 
       style="display: none;" 
       onchange="MapBuilder.handleCustomBackgroundUpload(event)">
```

### JavaScript Implementation

**New Method: `handleCustomBackgroundUpload(event)`**

```javascript
handleCustomBackgroundUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file (PNG, JPG, WEBP)');
    return;
  }
  
  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    alert('Image file is too large. Please upload an image smaller than 10MB.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Store and cache custom background
      this.customBackgroundImage = img;
      this.customBackgroundDataURL = e.target.result;
      this.currentBackground = 'custom';
      
      if (!this.backgroundImages) this.backgroundImages = {};
      this.backgroundImages['custom'] = img;
      
      this.closeBackgroundPicker();
      this.render();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  
  // Reset input
  event.target.value = '';
}
```

**Updated: `drawBackground()` Method**

Added custom background handling:
```javascript
// Handle custom background
if (this.currentBackground === 'custom' && this.backgroundImages && this.backgroundImages['custom']) {
  const img = this.backgroundImages['custom'];
  
  // Calculate cover mode scaling
  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;
  
  let drawWidth, drawHeight;
  if (canvasRatio > imgRatio) {
    drawWidth = width;
    drawHeight = width / imgRatio;
  } else {
    drawHeight = height;
    drawWidth = height * imgRatio;
  }
  
  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;
  
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}
```

---

## 📊 Complete Background Options

| Background | Type | Mode | Description |
|-----------|------|------|-------------|
| **Custom** | Upload | Cover | User-uploaded image (NEW!) |
| Forest | Built-in | Contain | Mountain with forest, complete view |
| Desert | Built-in | Cover | Sand texture, full coverage |
| Grassland | Built-in | Cover | Grass texture, full coverage |
| Ocean | Built-in | Cover | Water texture, full coverage |
| Winter | Built-in | Cover | Snow texture, full coverage |
| Mountain | Built-in | Cover | Stone texture, full coverage |
| Volcanic | Built-in | Cover | Lava texture, full coverage |
| Mystical | Built-in | Cover | Purple mystical texture, full coverage |

**Total Options:** 9 (8 built-in + 1 custom)

---

## ✅ Validation & Error Handling

### File Type Validation
- Only image files accepted
- Supported: PNG, JPG, JPEG, WEBP
- Error message shown for invalid types

### File Size Validation
- Maximum: 10MB
- Prevents browser memory issues
- Error message shown if too large

### Image Loading Validation
- Validates image can be decoded
- Error message if image is corrupted
- Graceful failure handling

---

## 💡 Use Cases

### Perfect For:
- **Custom terrain maps** - Upload your own terrain textures
- **Branded maps** - Use company logos or branded backgrounds
- **Specific settings** - Upload images that match your world's unique aesthetic
- **Photo backgrounds** - Use real photographs as map backgrounds
- **Artistic maps** - Upload custom artwork or illustrations
- **Thematic consistency** - Match backgrounds to your story's visual style

### Example Scenarios:
1. **Fantasy Author:** Upload a hand-drawn parchment texture
2. **Game Designer:** Use a screenshot from your game as the background
3. **DM/GM:** Upload a battle map or dungeon layout
4. **World Builder:** Use satellite imagery or custom terrain maps
5. **Artist:** Showcase your own artwork as the map background

---

## 🎨 UI Design

### Custom Button Appearance
- **Border:** Dashed black border (2px) to indicate upload action
- **Background:** Purple gradient (from #667eea to #764ba2)
- **Icon:** 📁 Folder emoji (2rem size)
- **Label:** "Custom"
- **Visual cue:** Distinct from other solid-bordered buttons

### User Experience Flow
1. User clicks "Background" button
2. Background picker modal opens
3. User sees 8 built-in options + 1 custom option
4. User clicks "Custom" button
5. File picker opens immediately
6. User selects image file
7. Image validates and loads
8. Background picker closes
9. Custom background applies to map
10. User can continue editing

---

## 🔧 Technical Details

### Memory Management
- Custom background stored in memory only
- Cleared when page refreshes
- Does not persist in localStorage
- Single custom background at a time

### Performance
- File size limit prevents memory issues
- Image caching for smooth rendering
- Efficient FileReader API usage
- No server upload required (client-side only)

### Browser Compatibility
- Uses standard FileReader API
- Works in all modern browsers
- No external dependencies
- Pure JavaScript implementation

---

## 📦 Files Modified

### Core Application
1. **app.js**
   - Lines 1103-1108: Added custom background button and file input
   - Lines 2445-2495: Added `handleCustomBackgroundUpload()` method
   - Lines 2744-2765: Added custom background rendering in `drawBackground()`

---

## 🚀 Upgrade Instructions

1. Extract `worldforge-v3.5.0-FINAL.zip`
2. Replace your existing installation
3. Open `index.html` in your browser
4. Click "Background" → "Custom" to upload your own images!

**Note:** All existing features remain unchanged. Custom backgrounds are an addition.

---

## 🔄 Version History

- **v3.5.0** - Custom background upload feature (current)
- **v3.4.0** - Dual-mode rendering (forest contain, others cover)
- **v3.3.0** - Unified cover mode for all backgrounds
- **v3.2.0** - Smart background rendering attempt
- **v3.1.0** - 30 genres + universal contain mode
- **v3.0.9** - New background images + delete functionality
- **v3.0.8** - Original release

---

## 💡 Pro Tips

### Best Images for Custom Backgrounds
- **High resolution:** 1920x1080 or larger for best quality
- **Seamless textures:** For repeating patterns
- **Centered focal points:** For scenic images
- **Good contrast:** Ensure map elements are visible
- **Appropriate colors:** Match your world's theme

### Recommended Image Sizes
- **Minimum:** 1280x720 (HD)
- **Recommended:** 1920x1080 (Full HD)
- **Maximum file size:** 10MB
- **Optimal format:** PNG for quality, JPG for smaller file size

### Custom Background Ideas
- Parchment or paper textures
- Satellite/aerial imagery
- Hand-drawn maps as backgrounds
- Fantasy landscape paintings
- Sci-fi space scenes
- Historical map reproductions
- Game screenshots
- Custom artwork

---

## 🎯 Future Enhancements

Potential improvements for future versions:
- Save custom backgrounds with maps
- Multiple custom background slots
- Custom background library/gallery
- Image editing tools (crop, rotate, adjust)
- Contain/Cover mode toggle for custom backgrounds
- Background opacity control

---

## 📞 Support

### Troubleshooting

**"Please upload an image file" error:**
- Ensure you're uploading PNG, JPG, or WEBP
- Check file extension is correct

**"Image file is too large" error:**
- Reduce image file size to under 10MB
- Use image compression tools
- Try converting to JPG format

**Image doesn't appear:**
- Check browser console for errors
- Try a different image file
- Ensure image is not corrupted
- Refresh page and try again

---

**Thank you for using WorldForge!** 🌍✨

*Now with unlimited creative freedom through custom backgrounds!*
