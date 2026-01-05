# Custom Asset Upload Modal Styling Fix

## Date: January 5, 2026

## Changes Made

Fixed the styling of the custom asset upload modal to improve readability and visual consistency in light mode.

---

## 1. Button Text Color in Light Mode

### Problem:
The "Upload Custom Assets" button had white text (`color: white`), which was difficult to read against the light background in light mode.

### Solution:
Changed button text color from `white` to `var(--black)` to ensure proper contrast in light mode.

**Before:**
```javascript
style="... color: white; ..."
```

**After:**
```javascript
style="... color: var(--black); ..."
```

---

## 2. Instructional Text Layout

### Problem:
The instructional text below the button was:
- Not center-aligned
- Had poor paragraph layout
- Cramped line spacing
- All text at the same size and emphasis

### Solution:
Improved the text layout with:
- Center alignment
- Better line spacing (line-height: 1.8)
- Line break between format list and recommendation
- Smaller, slightly transparent text for the recommendation
- Maximum width constraint for better readability
- Automatic horizontal centering

**Before:**
```html
<p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
  Supports PNG, JPG, WebP, GIF (transparent PNGs recommended)
</p>
```

**After:**
```html
<p style="margin-top: 1.5rem; font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.8; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;">
  Supports PNG, JPG, WebP, GIF<br>
  <span style="font-size: 0.875rem; opacity: 0.85;">(transparent PNGs recommended)</span>
</p>
```

---

## Visual Improvements

### Button:
- ✅ Black text in light mode (proper contrast)
- ✅ White text in dark mode (via CSS variable)
- ✅ Maintains all existing hover effects
- ✅ Maintains accessibility (ARIA label)

### Instructional Text:
- ✅ Center-aligned for better visual balance
- ✅ Increased line spacing (1.8) for readability
- ✅ Format list on first line
- ✅ Recommendation on second line with visual hierarchy
- ✅ Smaller font size (0.875rem) for recommendation
- ✅ Reduced opacity (0.85) for de-emphasis
- ✅ Maximum width (600px) prevents text from stretching too wide
- ✅ Auto margins for horizontal centering

---

## Files Modified

**File:** `app.js`  
**Lines:** 1877-1887  
**Section:** Custom asset upload modal HTML template

---

## Testing

Verified in both light and dark modes:
- ✅ Button text is readable in light mode (black text)
- ✅ Button text is readable in dark mode (white text via CSS variable)
- ✅ Instructional text is properly centered
- ✅ Line break creates clear visual separation
- ✅ Recommendation text has appropriate visual hierarchy
- ✅ Text doesn't stretch too wide on large screens

---

## Summary

These changes improve the user experience by:
1. Ensuring the call-to-action button is readable in light mode
2. Creating a cleaner, more professional layout for instructions
3. Establishing clear visual hierarchy between format list and recommendation
4. Maintaining consistency with the rest of the application's design

No other changes were made to the application.
