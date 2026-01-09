# WorldForge - Quick Start Guide (Fixed Version)

## 🎉 What's Been Fixed

This version of WorldForge has all critical bugs resolved:

1. ✅ **No more "undefined" fields** - All form fields display correctly
2. ✅ **Modals save properly** - Save Changes button works flawlessly
3. ✅ **Image uploads work** - Thumbnails load and display correctly
4. ✅ **Map builder is stable** - Add unlimited assets without issues
5. ✅ **System emoji picker** - Native OS emoji picker with search
6. ✅ **Icon duplication** - Easily duplicate map icons

---

## 🚀 Getting Started

### Opening the Application

1. Extract the `World-Forge-FIXED.zip` file
2. Open `index.html` in your web browser
3. Start creating your world!

**Recommended Browsers:**
- Chrome/Edge 99+ (best experience with native emoji picker)
- Safari 16+
- Firefox (uses fallback emoji picker)

---

## 📝 Creating Your First World

### Step 1: Create a New World

1. Click **"+ New World"** button
2. Enter your world name (e.g., "Eldoria")
3. Add a logline/description (optional)
4. Upload a banner image (optional)
5. Click **"Create World"**

### Step 2: Add Characters

1. Navigate to **Characters** module
2. Click **"+ Add Character"**
3. Fill in the form:
   - **Name**: Character's name
   - **Role**: Protagonist, Antagonist, etc.
   - **Thumbnail**: Upload an image (drag & drop or click)
   - **Age**: Character's age (no more "undefined"!)
   - **Description**: Physical traits
   - **Personality**: Character traits
   - **Goals**: What they want to achieve
   - **Background**: Their history
4. Click **"Add Character"**
5. Click **"Save Changes"** to edit existing characters

### Step 3: Build Your Map

1. Navigate to **Map Builder** module
2. Use the toolbar:
   - **✏️ Draw**: Draw paths and roads
   - **📍 Add Icon**: Place location markers (uses system emoji picker!)
   - **🏷️ Add Label**: Add text labels
   - **🎨 Assets**: Add buildings, trees, and objects
   - **🗺️ Background**: Choose terrain type
3. **Add Icons**:
   - Click "Add Icon"
   - System emoji picker opens (or fallback dropdown)
   - Search for emoji (🏰, 🏔️, 🌳, etc.)
   - Click on map to place
4. **Duplicate Icons**:
   - Double-click any icon to edit
   - Click **"Duplicate"** button
   - A copy appears with 50px offset
5. **Add Assets**:
   - Click "Assets" button
   - Browse fantasy/sci-fi/modern assets
   - Click to place on map
   - Drag to move, resize, or rotate
6. Click **💾 Save** when done

---

## 🎨 Working with Images

### Uploading Thumbnails

All entity types support thumbnail images:

1. **Drag & Drop**: Drag image file onto the upload area
2. **Click to Browse**: Click the upload area to select file
3. **Preview**: Image preview appears immediately
4. **Save**: Image is saved as base64 data

**Supported Formats**: JPG, PNG, WebP, GIF

### Image Best Practices

- **Characters**: Use portrait-style images (200x300px recommended)
- **Locations**: Use landscape images (400x300px recommended)
- **Banners**: Use wide images (1200x400px recommended)
- **File Size**: Keep under 2MB for best performance

---

## 🗺️ Map Builder Tips

### Performance

- ✅ **No Limit**: Add as many assets as you need
- ✅ **Stable Positioning**: Assets stay where you place them
- ✅ **Smooth Performance**: Optimized rendering with throttling

### Controls

- **Pan**: Hold Space + Drag
- **Select**: Click on icon/asset
- **Move**: Drag selected item
- **Edit**: Double-click icon
- **Delete**: Select item + Press Delete/Backspace
- **Duplicate**: Edit icon → Click "Duplicate"

### Keyboard Shortcuts

- `Space + Drag`: Pan the map
- `Delete` / `Backspace`: Delete selected item
- `Escape`: Deselect item

---

## 💾 Saving Your Work

### Auto-Save

WorldForge automatically saves to your browser's localStorage:

- ✅ After creating/editing any entity
- ✅ After saving the map
- ✅ When switching between modules

### Manual Save

- **Map Builder**: Click the **💾 Save** button
- **All Forms**: Click **"Save Changes"** or **"Add [Entity]"**

### Export Options

1. **Export World**: Download as JSON file
2. **Export Map**: Save map as PNG image
3. **Print**: Generate PDF report

---

## 🐛 Troubleshooting

### Modal Won't Close

**Fixed!** Modals now properly close when:
- Clicking the X button
- Clicking outside the modal
- Clicking "Save Changes" or "Cancel"

### "Undefined" in Fields

**Fixed!** All fields now show proper values or empty strings.

### Images Not Loading

**Fixed!** Image upload now works correctly:
1. Ensure file is under 5MB
2. Use supported formats (JPG, PNG, WebP)
3. Check browser console for errors

### Map Assets Disappearing

**Fixed!** Assets are now properly persisted:
- Saved to AppState on every change
- Loaded on map builder initialization
- Synchronized with localStorage

---

## 🎯 Best Practices

### Organization

1. **Start with Characters**: Define your main characters first
2. **Build Locations**: Create the places they'll visit
3. **Add Factions**: Define organizations and groups
4. **Create Map**: Visualize your world geographically
5. **Add Details**: Fill in magic systems, creatures, etc.

### Data Management

- **Regular Exports**: Export your world periodically
- **Backup**: Keep JSON backups of important worlds
- **Test Changes**: Try edits in a test world first

### Performance

- **Optimize Images**: Compress images before upload
- **Clear Cache**: If issues arise, clear browser cache
- **Modern Browser**: Use latest Chrome/Edge for best experience

---

## 🆘 Support

### Common Issues

**Q: Emoji picker doesn't open**
A: Your browser may not support `showPicker()`. The fallback dropdown will appear automatically.

**Q: Can I use custom emojis?**
A: Yes! The system emoji picker includes all OS-level emojis. The fallback supports standard Unicode emojis.

**Q: How many assets can I add to the map?**
A: No limit! The map builder is optimized to handle 100+ assets smoothly.

**Q: Can I import existing worlds?**
A: Yes! Use the "Import World" feature to load JSON exports.

---

## 🎓 Advanced Features

### Custom Modules

Create your own entity types:

1. Go to **Dashboard**
2. Click **"+ Add Module"**
3. Select **"Custom Module"**
4. Define fields (text, textarea, number)
5. Add entries with custom data

### Map Backgrounds

Choose from 8 terrain types:
- Winter (snow)
- Desert (sand)
- Grassland (green)
- Forest (trees)
- Ocean (water)
- Mountain (rocky)
- Volcanic (lava)
- Swamp (murky)

Or upload your own custom background!

---

## 📊 Data Structure

### Where Data is Stored

- **Location**: Browser localStorage
- **Key**: `worldForgeData`
- **Format**: JSON

### Backup Your Data

```javascript
// In browser console:
localStorage.getItem('worldForgeData')
```

Copy the output and save to a text file.

---

## 🚀 Next Steps

1. **Explore Modules**: Try each module (Characters, Locations, Factions, etc.)
2. **Build a Map**: Create a visual representation of your world
3. **Add Details**: Fill in descriptions, relationships, and lore
4. **Export**: Save your world as JSON for backup
5. **Share**: Export as PDF to share with others

---

## ✨ Enjoy Creating!

WorldForge is now fully functional and ready for you to build amazing worlds. Every feature works flawlessly, from character creation to map building.

**Happy World Building! 🌍**
