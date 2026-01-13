# WorldForge - Banner Image Feature

## ✨ New Feature: World Banner Images

Users can now upload custom banner images for each world!

---

## 🎯 How It Works

### Banner Display Locations

**1. Home Page (Library)**
- Banner appears as **thumbnail** at top of world card
- 200px height, full width of card
- Rounded corners with border
- Falls back to 🌍 emoji if no banner

**2. Inside World (Dashboard)**
- Banner appears as **full banner** at top of main content
- 200px height, full width
- Displays above world name and stats
- Rounded corners with border

---

## 📸 How to Add/Edit Banners

### From Home Page
1. Click the **✏️ Edit** button on any world card
2. Modal opens with "Edit World" form
3. Click **"Choose File"** under "Banner Image"
4. Select an image from your computer
5. Preview appears below file input
6. Click **"Save Changes"**
7. Banner updates on home page immediately

### From Dashboard
1. Click the **✏️** icon next to world name
2. Modal opens with "Edit World Name" form
3. Click **"Choose File"** under "Banner Image"
4. Select an image from your computer
5. Preview appears below file input
6. Click **"Save Changes"**
7. Banner appears at top of dashboard

---

## 🎨 Banner Specifications

### Recommended Dimensions
- **Aspect Ratio**: 16:9 or wider
- **Minimum Width**: 1200px
- **Minimum Height**: 200px
- **File Format**: JPG, PNG, GIF, WebP

### Display Settings
- **Height**: Fixed at 200px
- **Width**: 100% of container
- **Object Fit**: Cover (image fills space, may crop)
- **Border**: 2px solid border
- **Border Radius**: 1rem (rounded corners)

### File Size
- Images stored as Base64 in localStorage
- Recommended: Keep under 500KB for performance
- Larger images work but may slow down app

---

## 💡 Usage Tips

### Best Practices
1. **Use landscape images** - 16:9 aspect ratio works best
2. **Center important elements** - Edges may be cropped on narrow screens
3. **High contrast** - Ensure text remains readable
4. **Consistent style** - Use similar aesthetics across worlds
5. **Optimize before upload** - Compress images to reduce file size

### Image Ideas by Genre

**Fantasy**
- Epic landscapes with castles
- Mountain ranges with magic
- Enchanted forests
- Medieval cities

**Sci-Fi**
- Futuristic cityscapes
- Space stations
- Alien planets
- Cyberpunk streets

**Horror**
- Dark, moody atmospheres
- Abandoned buildings
- Foggy graveyards
- Ominous skies

**Thriller**
- Urban environments
- Noir cityscapes
- Dramatic lighting
- Mysterious locations

**Adventure**
- Exotic locations
- Jungles and islands
- Ancient ruins
- Vast wilderness

**Historical**
- Period-appropriate architecture
- Historical landmarks
- Vintage photographs
- Cultural scenes

---

## 🔧 Technical Details

### Storage
- Images converted to Base64 data URLs
- Stored in `world.banner` property
- Persisted in localStorage
- Survives page refreshes

### Image Processing
```javascript
// File input triggers FileReader
const reader = new FileReader();
reader.onload = function(e) {
  world.banner = e.target.result; // Base64 string
  AppState.save();
};
reader.readAsDataURL(file);
```

### Display Logic
```javascript
// Home page thumbnail
${world.banner ? `<img src="${world.banner}">` : '🌍'}

// Dashboard full banner
${world.banner ? `
  <div class="world-banner">
    <img src="${world.banner}" alt="${world.name}">
  </div>
` : ''}
```

---

## ✅ Feature Summary

| Location | Display | Size | Editable |
|----------|---------|------|----------|
| **Home Page** | Thumbnail in card | 200px height | ✏️ Edit button |
| **Dashboard** | Full banner | 200px height | ✏️ Icon next to name |
| **Edit Modal** | Preview | 100px height | File input |

---

## 🎯 User Workflows

### Adding a Banner to New World
1. Create world from home page
2. Open world
3. Click ✏️ next to world name
4. Upload banner image
5. Save changes
6. Banner appears at top

### Changing Existing Banner
1. From home page: Click ✏️ on world card
2. Or from dashboard: Click ✏️ next to world name
3. Select new image
4. Preview shows new image
5. Save changes
6. Banner updates everywhere

### Removing a Banner
1. Edit world (home page or dashboard)
2. Currently: Upload a new image to replace
3. Future: "Remove Banner" button could be added

---

## 🚀 Benefits

**Visual Identity**
- Each world has unique visual identity
- Easier to distinguish between worlds
- More engaging user experience

**Immersion**
- Banner sets the tone and atmosphere
- Helps writers visualize their world
- Creates emotional connection

**Organization**
- Visual cues help find worlds quickly
- Thumbnails more memorable than text
- Professional appearance

**Customization**
- Users can express creativity
- Personalize their workspace
- Match their world's aesthetic

---

## 📝 Future Enhancements

Potential improvements:
- **Remove banner button** - Clear banner without replacing
- **Banner library** - Preset banners by genre
- **Image cropping** - Adjust crop position
- **Multiple images** - Gallery or carousel
- **AI generation** - Generate banner from description
- **Filters/effects** - Apply visual effects to banners

---

## ✨ Summary

The banner image feature adds visual richness to WorldForge, allowing users to:

✅ Upload custom images for each world
✅ See banners as thumbnails on home page
✅ View full banners inside worlds
✅ Edit banners anytime from home or dashboard
✅ Create visually distinct worlds
✅ Enhance immersion and organization

This feature transforms WorldForge from a text-based tool into a visually engaging world building suite!
