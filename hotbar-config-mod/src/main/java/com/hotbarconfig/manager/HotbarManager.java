package com.hotbarconfig.manager;

import com.hotbarconfig.category.CategoryMatcher;
import com.hotbarconfig.category.ItemCategory;
import com.hotbarconfig.config.ConfigManager;
import com.hotbarconfig.config.HotbarConfig;
import net.minecraft.client.MinecraftClient;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.entity.player.PlayerInventory;
import net.minecraft.item.ItemStack;
import net.minecraft.text.Text;

public class HotbarManager {
    private static final int HOTBAR_SIZE = 9;
    
    public static void saveHotbarConfiguration() {
        MinecraftClient client = MinecraftClient.getInstance();
        if (client.player == null) return;
        
        PlayerInventory inventory = client.player.getInventory();
        HotbarConfig config = new HotbarConfig();
        
        // Scan hotbar and save categories
        for (int i = 0; i < HOTBAR_SIZE; i++) {
            ItemStack stack = inventory.getStack(i);
            ItemCategory category = CategoryMatcher.getCategory(stack);
            config.setCategory(i, category);
        }
        
        ConfigManager.save(config);
        client.player.sendMessage(Text.literal("§aHotbar configuration saved!"), true);
    }
    
    public static void restoreHotbarConfiguration() {
        MinecraftClient client = MinecraftClient.getInstance();
        if (client.player == null) return;
        
        PlayerEntity player = client.player;
        PlayerInventory inventory = player.getInventory();
        HotbarConfig config = ConfigManager.getCurrentConfig();
        
        // Track which items we've already used
        boolean[] usedSlots = new boolean[inventory.size()];
        
        // First pass: try to restore each hotbar slot
        for (int hotbarSlot = 0; hotbarSlot < HOTBAR_SIZE; hotbarSlot++) {
            ItemCategory targetCategory = config.getCategory(hotbarSlot);
            
            if (targetCategory == ItemCategory.NONE) {
                // Clear the slot
                inventory.setStack(hotbarSlot, ItemStack.EMPTY);
                continue;
            }
            
            // Check if current item is already correct
            ItemStack currentStack = inventory.getStack(hotbarSlot);
            if (CategoryMatcher.matchesCategory(currentStack, targetCategory)) {
                usedSlots[hotbarSlot] = true;
                continue;
            }
            
            // Search inventory for matching item
            boolean found = false;
            for (int invSlot = 0; invSlot < inventory.size(); invSlot++) {
                if (usedSlots[invSlot]) continue;
                
                ItemStack stack = inventory.getStack(invSlot);
                if (CategoryMatcher.matchesCategory(stack, targetCategory)) {
                    // Found a match - swap items
                    ItemStack temp = inventory.getStack(hotbarSlot);
                    inventory.setStack(hotbarSlot, stack.copy());
                    inventory.setStack(invSlot, temp);
                    usedSlots[invSlot] = true;
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                // No matching item found - clear the slot
                inventory.setStack(hotbarSlot, ItemStack.EMPTY);
            }
        }
        
        player.sendMessage(Text.literal("§aHotbar configuration restored!"), true);
    }
}
