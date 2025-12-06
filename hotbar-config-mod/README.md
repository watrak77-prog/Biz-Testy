# Hotbar Configuration Mod

A Minecraft Fabric mod for version 1.21.5 that allows you to save and restore your hotbar configuration by item category.

## Features

- **Save hotbar by category**: Press `R` (default) or use `/save` command to save your current hotbar layout
- **Restore hotbar**: Press `V` (default) to restore your saved hotbar configuration
- **Smart category matching**: Items are matched by category (sword, food, tools, etc.)
  - Any sword goes to the sword slot
  - Any food goes to the food slot
  - Special TNT category includes TNT, cobwebs, and sponges
- **Empty slots**: If you don't have an item from a saved category, the slot will be left empty

## Installation

1. Ensure you have Minecraft 1.21.5 installed
2. Install Fabric Loader (0.16.14 or higher)
3. Install Fabric API (0.115.3+1.21.5 or higher)
4. Place the mod jar in your `.minecraft/mods` folder

## Building

To build the mod from source:

```sh
./gradlew build
```

The compiled jar will be in `build/libs/`

## Usage

1. Arrange your hotbar with the items/categories you want (e.g., sword in slot 2, food in slot 8, etc.)
2. Press `R` or type `/save` to save the configuration
3. At any time, press `V` to restore your items to their saved slots

The configuration is saved in `.minecraft/config/hotbar-config.json`

## Keybinds

- **Save**: `R` (configurable in Controls menu)
- **Restore**: `V` (configurable in Controls menu)

## Item Categories

- Swords, Axes, Pickaxes, Shovels, Hoes
- Bows, Crossbows
- Food
- Potions
- Buckets
- Shields
- TNT Utility (TNT, Cobwebs, Sponges)
- Blocks
- Generic Tools

## License

MIT License
