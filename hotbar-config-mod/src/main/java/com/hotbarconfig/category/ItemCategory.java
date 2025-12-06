package com.hotbarconfig.category;

public enum ItemCategory {
    SWORD,
    AXE,
    PICKAXE,
    SHOVEL,
    HOE,
    BOW,
    CROSSBOW,
    FOOD,
    POTION,
    BLOCK,
    TNT_UTILITY,  // TNT, cobwebs, sponge
    BUCKET,
    SHIELD,
    TOOL,  // Generic tool
    NONE;  // Empty slot

    public static ItemCategory fromString(String name) {
        try {
            return ItemCategory.valueOf(name);
        } catch (IllegalArgumentException e) {
            return NONE;
        }
    }
}
