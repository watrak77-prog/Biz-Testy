package com.hotbarconfig.category;

import net.minecraft.item.*;
import net.minecraft.registry.Registries;
import net.minecraft.registry.tag.ItemTags;

public class CategoryMatcher {
    
    public static ItemCategory getCategory(ItemStack stack) {
        if (stack.isEmpty()) {
            return ItemCategory.NONE;
        }
        
        Item item = stack.getItem();
        
        // Check specific items for TNT_UTILITY category
        if (item == Items.TNT || item == Items.COBWEB || 
            item == Items.SPONGE || item == Items.WET_SPONGE) {
            return ItemCategory.TNT_UTILITY;
        }
        
        // Check weapons
        if (item instanceof SwordItem) {
            return ItemCategory.SWORD;
        }
        if (item instanceof AxeItem) {
            return ItemCategory.AXE;
        }
        if (item instanceof PickaxeItem) {
            return ItemCategory.PICKAXE;
        }
        if (item instanceof ShovelItem) {
            return ItemCategory.SHOVEL;
        }
        if (item instanceof HoeItem) {
            return ItemCategory.HOE;
        }
        
        // Check ranged weapons
        if (item instanceof BowItem) {
            return ItemCategory.BOW;
        }
        if (item instanceof CrossbowItem) {
            return ItemCategory.CROSSBOW;
        }
        
        // Check shield
        if (item instanceof ShieldItem) {
            return ItemCategory.SHIELD;
        }
        
        // Check food
        if (item.isFood()) {
            return ItemCategory.FOOD;
        }
        
        // Check potions
        if (item instanceof PotionItem || item instanceof LingeringPotionItem || 
            item instanceof SplashPotionItem) {
            return ItemCategory.POTION;
        }
        
        // Check buckets
        if (item instanceof BucketItem) {
            return ItemCategory.BUCKET;
        }
        
        // Check if it's a block
        if (item instanceof BlockItem) {
            return ItemCategory.BLOCK;
        }
        
        // Generic tool check
        if (item instanceof ToolItem) {
            return ItemCategory.TOOL;
        }
        
        return ItemCategory.NONE;
    }
    
    public static boolean matchesCategory(ItemStack stack, ItemCategory category) {
        if (category == ItemCategory.NONE) {
            return stack.isEmpty();
        }
        return getCategory(stack) == category;
    }
}
