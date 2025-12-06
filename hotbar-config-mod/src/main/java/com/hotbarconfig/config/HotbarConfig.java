package com.hotbarconfig.config;

import com.hotbarconfig.category.ItemCategory;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class HotbarConfig {
    private static final int HOTBAR_SIZE = 9;
    private ItemCategory[] categories;
    
    public HotbarConfig() {
        this.categories = new ItemCategory[HOTBAR_SIZE];
        for (int i = 0; i < HOTBAR_SIZE; i++) {
            categories[i] = ItemCategory.NONE;
        }
    }
    
    public void setCategory(int slot, ItemCategory category) {
        if (slot >= 0 && slot < HOTBAR_SIZE) {
            categories[slot] = category;
        }
    }
    
    public ItemCategory getCategory(int slot) {
        if (slot >= 0 && slot < HOTBAR_SIZE) {
            return categories[slot];
        }
        return ItemCategory.NONE;
    }
    
    public String toJson() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(this);
    }
    
    public static HotbarConfig fromJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, HotbarConfig.class);
    }
}
