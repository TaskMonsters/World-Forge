# Map Builder Asset Database

This database contains **120 top-down 2D style images** designed for map builder applications. All assets are provided in PNG format with transparent backgrounds at 256x256 pixel resolution.

## Database Structure

```
map_builder_assets/
├── fantasy/          (40 assets - medieval/magical theme)
├── scifi/            (40 assets - futuristic/technological theme)
├── normal/           (40 assets - modern/contemporary theme)
├── asset_catalog.json (Complete database catalog)
└── README.md         (This file)
```

## Asset Distribution

### By Theme
- **Fantasy**: 40 assets (medieval castles, magic elements, cobblestone roads)
- **Sci-Fi**: 40 assets (futuristic buildings, energy systems, tech infrastructure)
- **Normal**: 40 assets (modern buildings, urban infrastructure, contemporary elements)

### By Category
- **Buildings**: 47 assets (residential, commercial, industrial, special purpose)
- **Decorative**: 40 assets (fences, signs, furniture, props)
- **Natural**: 16 assets (trees, plants, water, terrain features)
- **Roads**: 17 assets (pathways, streets, bridges, intersections)

## File Naming Convention

All assets follow a consistent naming pattern:
```
{theme}_{id:03d}_{asset_name}.png
```

Examples:
- `fantasy_001_small_wooden_cottage.png`
- `scifi_041_hab_dome.png`
- `normal_081_suburban_house.png`

## Asset Catalog

The `asset_catalog.json` file provides complete metadata for all assets:

```json
{
  "metadata": {
    "total_assets": 120,
    "themes": { "fantasy": 40, "scifi": 40, "normal": 40 },
    "resolution": "256x256",
    "format": "PNG",
    "style": "top-down 2D"
  },
  "assets": [
    {
      "id": 1,
      "name": "small_wooden_cottage",
      "description": "Small wooden cottage",
      "theme": "fantasy",
      "category": "building",
      "filename": "fantasy_001_small_wooden_cottage.png",
      "path": "fantasy/fantasy_001_small_wooden_cottage.png"
    }
    // ... 119 more assets
  ]
}
```

## Integration Guide

### Loading Assets in Your Map Builder

**JavaScript/TypeScript Example:**
```javascript
// Load the catalog
const catalog = await fetch('asset_catalog.json').then(r => r.json());

// Filter assets by theme
const fantasyAssets = catalog.assets.filter(a => a.theme === 'fantasy');

// Filter assets by category
const buildings = catalog.assets.filter(a => a.category === 'building');

// Load a specific asset
const assetPath = catalog.assets[0].path;
const image = new Image();
image.src = assetPath;
```

**Python Example:**
```python
import json
from PIL import Image

# Load catalog
with open('asset_catalog.json') as f:
    catalog = json.load(f)

# Get all sci-fi roads
scifi_roads = [a for a in catalog['assets'] 
               if a['theme'] == 'scifi' and a['category'] == 'road']

# Load an asset
asset = catalog['assets'][0]
img = Image.open(asset['path'])
```

## Asset Categories Breakdown

### Fantasy Theme (40 assets)
- **Buildings** (12): Cottages, castles, taverns, towers, workshops
- **Natural Features** (10): Trees, rocks, crystals, mushrooms, ruins
- **Roads/Paths** (6): Cobblestone roads, dirt paths, bridges
- **Decorative** (12): Fences, torches, signs, market stalls, treasure chests

### Sci-Fi Theme (40 assets)
- **Buildings** (12): Hab-domes, reactors, landing pads, laboratories
- **Tech Features** (10): Artificial trees, holograms, energy crystals, processors
- **Roads/Paths** (6): Metallic roads, energy grids, teleporter pads
- **Decorative** (12): Energy barriers, neon lights, cargo containers, charging stations

### Normal Theme (40 assets)
- **Buildings** (12): Houses, offices, shops, public services
- **Natural Features** (10): Trees, bushes, ponds, gardens, playgrounds
- **Roads/Paths** (6): Asphalt roads, sidewalks, bridges, crosswalks
- **Decorative** (12): Fences, street lamps, benches, urban furniture

## Technical Specifications

- **Format**: PNG with transparency
- **Resolution**: 256x256 pixels
- **Color Mode**: RGBA
- **Perspective**: Top-down (bird's eye view)
- **Style**: Clean 2D illustration optimized for tile-based maps
- **Background**: Transparent (alpha channel)

## Usage Recommendations

### For Tile-Based Maps
- Assets are designed to work on standard grid systems
- Use 256x256 grid cells for 1:1 rendering
- Scale proportionally for different grid sizes

### For AI Integration
- The `asset_catalog.json` provides structured metadata for AI agents
- Each asset includes descriptive text for semantic search
- Category and theme tags enable intelligent asset selection
- Consistent naming allows programmatic asset management

### Performance Tips
- Preload frequently used assets
- Use sprite sheets for better performance (combine multiple assets)
- Implement asset caching for repeated use
- Consider generating lower-resolution thumbnails for asset browsers

## License & Usage

These assets are generated for your map builder project. You have full rights to:
- Use in commercial or non-commercial projects
- Modify, resize, or edit the images
- Integrate into web, mobile, or desktop applications
- Distribute as part of your map builder application

## Support

For questions about integrating these assets into your map builder or requesting additional assets, please refer to your AI agent or development documentation.

---

**Database Version**: 1.0  
**Generated**: December 2025  
**Total Assets**: 120  
**Themes**: Fantasy, Sci-Fi, Normal
