# WorldForge v3.16.0 - Theme-Aware Hierarchy Buttons

**Release Date:** January 1, 2026

## Overview

This release fixes a styling issue with the three toolbar buttons in the Hierarchy Tree modal, making them properly adapt to both light and dark themes.

## What Was Fixed

The hierarchy tree modal contains three toolbar buttons at the top:
- 🌳 **Add Root Node** - Creates a new root node in the hierarchy
- 🔄 **Reset Layout** - Resets the tree visualization layout
- 📷 **Export Image** - Exports the hierarchy tree as an image

### The Problem

These buttons were using a fixed dark background color (`var(--gray-700)` = `#404040`), which caused them to appear dark in both light and dark modes. In light mode, this created a jarring visual inconsistency where the buttons stood out with dark backgrounds while the rest of the interface used light colors.

### The Solution

Changed the button background styling from `var(--gray-700)` to `var(--card-bg)`, which is a theme-aware CSS variable that automatically adapts to the current theme:

**Light Mode:**
- `--card-bg` = `#F0F0F0` (light gray)
- Buttons now have light backgrounds that match the light theme

**Dark Mode:**
- `--card-bg` = `#1a1a1a` (dark gray)
- Buttons maintain dark backgrounds appropriate for the dark theme

## Technical Details

**File Modified:** `worldforge/worldforge-v3.0.8/app.js`

**Lines Changed:** 3856-3858

**Before:**
```javascript
background: var(--gray-700);
```

**After:**
```javascript
background: var(--card-bg);
```

## Testing

A comprehensive test page (`test-buttons.html`) has been included in this release that demonstrates:
- Side-by-side comparison of the old (broken) vs. new (fixed) button styling
- Interactive theme toggle to verify the fix works in both modes
- Full modal preview showing the buttons in context

## Files Included

- `worldforge/worldforge-v3.0.8/` - Updated WorldForge application
- `test-buttons.html` - Interactive test page demonstrating the fix
- `RELEASE-NOTES-v3.16.0.md` - This file

## Upgrade Instructions

1. Extract the `worldforge-v3.16.0-THEME-AWARE-BUTTONS.zip` file
2. Open `worldforge/worldforge-v3.0.8/index.html` in your browser
3. Navigate to any world → Hierarchy module
4. Create or open a hierarchy and click "View Tree" (🌳 button)
5. Verify that the three toolbar buttons match the current theme

## Compatibility

- Fully backward compatible with v3.15.0
- All existing hierarchy data is preserved
- No database migrations required
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Version History

- **v3.16.0** - Fixed hierarchy tree toolbar button theme adaptation
- **v3.15.0** - Added image lightbox functionality
- **v3.14.0** - Previous release

---

**Package:** `worldforge-v3.16.0-THEME-AWARE-BUTTONS.zip`  
**Size:** 303 MB  
**Checksum:** Available upon request
