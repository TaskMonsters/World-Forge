# WorldForge PWA Installation Guide

## What Was Fixed

The 404 "GitHub Pages site not found" error has been resolved by fixing the PWA manifest configuration:

### Changes Made:

1. **manifest.json** - Updated to use relative paths:
   - Changed `"start_url": "/"` to `"start_url": "./index.html"`
   - Added `"scope": "./"` for proper PWA scope
   - This ensures the app loads from the correct location regardless of where it's hosted

2. **sw.js** - Created a new Service Worker:
   - Caches all essential app files for offline use
   - Provides proper PWA functionality
   - Enables "Add to Home Screen" on mobile devices

3. **index.html** - Added Service Worker registration:
   - Automatically registers the service worker when the app loads
   - Enables offline functionality and proper PWA behavior

---

## How to Install WorldForge as a PWA

### IMPORTANT: Uninstall Old Version First

Before installing the new version, you MUST uninstall the old PWA that's showing the 404 error:

#### On iPhone/iPad:
1. Find the WorldForge app icon on your home screen
2. Long-press the icon until it jiggles
3. Tap the "Remove App" or "Delete App" option
4. Confirm deletion

#### On Android:
1. Find the WorldForge app icon
2. Long-press the icon
3. Drag to "Uninstall" or tap "App info" → "Uninstall"
4. Confirm deletion

#### On Desktop (Chrome/Edge):
1. Open Chrome/Edge
2. Go to `chrome://apps` (or `edge://apps`)
3. Right-click on WorldForge
4. Select "Remove from Chrome" or "Uninstall"

#### On Desktop (Alternative):
1. Open browser settings
2. Go to "Apps" or "Installed Apps"
3. Find WorldForge and click "Uninstall"

---

## Installation Methods

### Method 1: Host on a Web Server (RECOMMENDED)

This is the best method for PWA installation on mobile devices.

#### Option A: Use GitHub Pages (Free)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a new repository**
   - Click "New repository"
   - Name it `worldforge` (or any name you prefer)
   - Make it Public
   - Click "Create repository"

3. **Upload files**
   - Extract the ZIP file on your computer
   - Click "uploading an existing file" on GitHub
   - Drag and drop ALL files from the worldforge-project folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

5. **Access your app**
   - GitHub will show you the URL: `https://yourusername.github.io/worldforge/`
   - Open this URL on your phone or computer

6. **Install as PWA**
   - **On iPhone/iPad**: Tap the Share button → "Add to Home Screen"
   - **On Android**: Tap the menu (⋮) → "Add to Home Screen" or "Install app"
   - **On Desktop**: Click the install icon in the address bar (⊕ or computer icon)

#### Option B: Use Netlify (Free, Easier)

1. Go to https://www.netlify.com
2. Sign up for free
3. Drag and drop the entire worldforge-project folder
4. Netlify will give you a URL like `https://random-name.netlify.app`
5. Open the URL and install as PWA (see step 6 above)

#### Option C: Use Your Own Web Hosting

1. Upload all files to your web hosting via FTP/cPanel
2. Access via your domain name
3. Install as PWA

---

### Method 2: Local Installation (Desktop Only)

This method works for desktop but NOT recommended for mobile devices.

1. **Extract the ZIP file** to a permanent location:
   - Windows: `C:\Users\YourName\Documents\WorldForge\`
   - Mac: `/Users/YourName/Documents/WorldForge/`
   - Linux: `~/Documents/WorldForge/`

2. **Open in browser**:
   - Right-click `index.html`
   - Select "Open with" → Your browser (Chrome, Edge, Firefox)
   - OR drag `index.html` into your browser window

3. **Create a bookmark** (since PWA install won't work from file://):
   - Press Ctrl+D (Windows/Linux) or Cmd+D (Mac)
   - Save to bookmarks bar for easy access

**Note**: Service Worker and PWA features will NOT work with `file://` URLs. You must use a web server (Method 1) for full PWA functionality.

---

### Method 3: Run Local Web Server (Advanced)

If you want to test PWA features locally:

#### Using Python (Mac/Linux/Windows with Python):

```bash
cd /path/to/worldforge-project
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

#### Using Node.js:

```bash
npm install -g http-server
cd /path/to/worldforge-project
http-server -p 8080
```

Then open: `http://localhost:8080`

#### Using VS Code:

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## Verifying PWA Installation

After installing, verify it's working correctly:

### Check 1: App Opens Without Browser UI
- The app should open in standalone mode (no address bar)
- Looks like a native app

### Check 2: Works Offline
1. Open the app
2. Turn off WiFi/mobile data
3. Close and reopen the app
4. It should still work (after first load)

### Check 3: No 404 Error
- The app should load your worlds immediately
- No "GitHub Pages" error message

---

## Troubleshooting

### Still Getting 404 Error?

1. **Make sure you uninstalled the old version** (see instructions above)
2. **Clear browser cache**:
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Safari: Settings → Safari → Clear History and Website Data
3. **Use Method 1** (web server) instead of opening files directly

### PWA Install Option Not Showing?

- PWAs require HTTPS or localhost
- Use GitHub Pages, Netlify, or local server (Method 1 or 3)
- File:// URLs don't support PWA installation

### App Not Working Offline?

- Service Worker needs HTTPS or localhost to work
- First load requires internet connection
- After first load, app will work offline

---

## Data Storage

All your worlds, characters, and maps are stored in your browser's localStorage:

- **Data is device-specific**: Each device has its own data
- **Data persists**: Uninstalling the PWA does NOT delete your data
- **Export regularly**: Use the export features to backup your work

---

## Support

For issues or questions:
- Check the `BUG-FIXES-SUMMARY.md` for technical details
- Check the `README.md` for general usage instructions
- Check the `QUICK-START-FIXED-VERSION.md` for quick start guide

---

## Summary

✅ **manifest.json** - Fixed with relative paths  
✅ **sw.js** - Service Worker created for offline functionality  
✅ **index.html** - Service Worker registration added  
✅ **404 Error** - Resolved by proper PWA configuration  

**Recommended**: Use GitHub Pages or Netlify (Method 1) for best PWA experience on all devices.
