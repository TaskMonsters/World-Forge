# WorldForge v3.17.0 - Release Notes

**Release Date**: January 2, 2026  
**Version**: 3.17.0

## Overview

This release introduces two major enhancements to improve user experience and interface customization in WorldForge Elite Author Edition.

---

## New Features

### 1. Customizable Dashboard Module Management

Users can now fully customize which modules appear on their dashboard, providing a personalized and streamlined workspace tailored to their specific worldbuilding needs.

**Key Capabilities:**

- **Toggle Module Visibility**: Users can show or hide any of the seven core modules (Map Builder, Locations, Characters, Factions, Timeline, Rules, and Themes) directly from the dashboard interface.

- **Customization Mode**: A dedicated customization mode is activated via a settings button (⚙️) located in the dashboard header next to the world name edit button. When active, the button is highlighted and displays a status message: "✨ Customization mode active - Toggle modules on/off"

- **Visual Feedback**: In customization mode, each module card displays an eye icon (👁️) button in the top-right corner. Clicking this button toggles the module's visibility. Hidden modules appear dimmed (50% opacity) with a modified eye icon (👁️‍🗨️) to indicate their hidden state.

- **Persistent Preferences**: Module visibility preferences are automatically saved to browser localStorage, ensuring that dashboard customizations persist across sessions and page refreshes.

- **Clean Normal View**: When customization mode is deactivated, hidden modules are completely removed from the dashboard view, providing a clean and focused interface showing only the modules relevant to the user's current project.

**Technical Implementation:**

The feature is implemented through a new `DashboardCustomizer` object that manages module definitions, user preferences, and rendering logic. The system stores preferences in JSON format in localStorage under the key `dashboardPreferences`, which includes both the customization mode state and an array of visible module IDs.

---

### 2. Enhanced Map Builder Text Readability

The instructional text in the Map Builder's "How to use" section has been updated to improve readability and visual clarity.

**Changes:**

- **Text Color Update**: The instructional text color has been changed from gray (`var(--gray-700)`) to white, providing significantly better contrast against the light gray background box.

- **Improved Legibility**: The white text ensures that all instructions and asset control information are clearly visible and easy to read, particularly for users working in various lighting conditions or with different display settings.

- **Consistent Styling**: Both the main instruction grid and the "Asset Controls" footer section now use consistent white text styling.

**Affected Sections:**

- Main instruction grid displaying tool descriptions (Draw, Add Icon, Assets, Background, Save, Load, Clear)
- Asset Controls footer showing keyboard shortcuts and interaction methods

---

## Technical Details

### Files Modified

- **app.js**: 
  - Added `DashboardCustomizer` object (lines 782-876)
  - Modified `renderDashboard()` function to integrate customization features
  - Updated Map Builder text styling in `renderMapBuilder()` function

### Browser Compatibility

These features utilize standard web APIs (localStorage, DOM manipulation) and are compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.

### Data Persistence

Dashboard customization preferences are stored locally in the browser and do not sync across devices. Each browser/device maintains its own customization settings.

---

## User Benefits

**For Authors and Worldbuilders:**

- **Focused Workspace**: Remove modules that aren't relevant to your current project phase, reducing visual clutter and improving focus.
- **Flexible Organization**: Adapt your dashboard to match your worldbuilding workflow, whether you're focusing on character development, location design, or timeline creation.
- **Improved Readability**: Clear, high-contrast text in the Map Builder ensures you never miss important instructions or keyboard shortcuts.
- **Personalized Experience**: Each world can have its own module configuration, allowing you to optimize your workspace for different projects.

---

## Upgrade Notes

This is a non-breaking update. All existing worlds, data, and preferences remain fully compatible. Users will immediately have access to the new customization features without any migration or setup required.

### First-Time Usage

1. Navigate to any world's dashboard
2. Click the settings icon (⚙️) in the dashboard header to enter customization mode
3. Click the eye icon (👁️) on any module card to toggle its visibility
4. Click the settings icon again to exit customization mode and view your customized dashboard
5. Your preferences are automatically saved and will persist across sessions

---

## Known Limitations

- Module customization is currently limited to the seven core modules displayed on the dashboard
- Customization preferences are stored per-browser and do not sync across devices
- Hidden modules remain accessible via the sidebar navigation

---

## Future Enhancements

Potential future improvements being considered:

- Drag-and-drop module reordering
- Module size customization (compact vs. expanded views)
- Cloud sync for dashboard preferences across devices
- Custom module creation and plugin support
- Dashboard layout templates (grid vs. list views)

---

## Feedback

We welcome your feedback on these new features. If you encounter any issues or have suggestions for improvements, please visit our support page at https://help.manus.im

---

**Version History:**
- v3.17.0 (January 2, 2026): Dashboard customization and Map Builder text improvements
- v3.16.0 (January 1, 2026): Button hover fixes
- v3.15.0 and earlier: See previous release notes

---

*WorldForge Elite Author Edition - Empowering authors to build rich, interconnected fictional universes*
