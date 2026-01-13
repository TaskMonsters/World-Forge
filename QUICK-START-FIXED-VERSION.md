# WorldForge - Quick Start Guide (Fixed Version)

## What's Been Fixed

This version resolves two critical bugs:

1. **✅ Export PDF/Map Download**: The "Export PDF" button now works correctly
2. **✅ Mobile Hamburger Menu**: The sidebar now properly slides out on mobile devices

---

## How to Use

### Desktop Usage

1. **Open the Application**:
   - Extract the ZIP file
   - Open `index.html` in your web browser
   - The sidebar will be visible on the left side

2. **Export Your Map**:
   - Click the ⚙️ Settings button in the sidebar
   - Click "Export PDF"
   - Your map will download as a PNG file

### Mobile Usage

1. **Open on Mobile**:
   - Transfer the files to your mobile device, OR
   - Host on a web server and access via mobile browser

2. **Access the Sidebar**:
   - Tap the ☰ hamburger button in the top-left corner
   - The sidebar will slide in from the left
   - Tap anywhere outside the sidebar (on the dark overlay) to close it

3. **Install as App** (Optional):
   - In your mobile browser, look for "Add to Home Screen"
   - The app will install like a native app
   - Launch from your home screen

---

## Testing the Fixes

### Test Export Function:
1. Open a world (or use the sample "Eldoria" world)
2. Go to the Map Builder module
3. Click Settings (⚙️) → Export PDF
4. A PNG file should download automatically

### Test Mobile Sidebar:
1. Resize your browser window to 768px wide or less (or use mobile device)
2. You should see the ☰ hamburger button appear
3. Click/tap the hamburger button
4. The sidebar should smoothly slide in from the left
5. A dark overlay should appear over the main content
6. Click/tap outside the sidebar to close it
7. The sidebar should slide back out

---

## Technical Details

### Files Modified:

1. **app.js**:
   - Added `exportMapAsPDF()` function to MapBuilder object (line 4961-4964)

2. **styles.css**:
   - Updated base `.sidebar` CSS with explicit positioning (line 307-316)
   - Fixed mobile sidebar CSS to use `transform` instead of `left` (line 2174-2188)

### Browser Compatibility:
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ All modern browsers with CSS3 support

---

## Deployment Options

### Option 1: Local Files
- Simply open `index.html` in a browser
- All data is stored in browser localStorage
- Works offline after first load

### Option 2: Web Server
- Upload all files to any web hosting service
- Access via URL from any device
- Can be installed as PWA on mobile

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name/`

---

## Support

For detailed information about the fixes, see `BUG-FIXES-SUMMARY.md`

For general usage instructions, see `README.md`

---

## Version Information

- **Version**: 3.30.0 (Fixed)
- **Fix Date**: January 5, 2026
- **Bugs Fixed**: 2 critical issues
- **Files Modified**: 2 files (app.js, styles.css)
