package com.hotbarconfig.config;

import net.fabricmc.loader.api.FabricLoader;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class ConfigManager {
    private static final String CONFIG_FILE_NAME = "hotbar-config.json";
    private static HotbarConfig currentConfig;
    
    public static void init() {
        load();
    }
    
    public static void save(HotbarConfig config) {
        currentConfig = config;
        Path configPath = getConfigPath();
        
        try {
            Files.createDirectories(configPath.getParent());
            String json = config.toJson();
            Files.writeString(configPath, json);
        } catch (IOException e) {
            System.err.println("Failed to save hotbar configuration: " + e.getMessage());
        }
    }
    
    public static HotbarConfig load() {
        Path configPath = getConfigPath();
        
        if (Files.exists(configPath)) {
            try {
                String json = Files.readString(configPath);
                currentConfig = HotbarConfig.fromJson(json);
                return currentConfig;
            } catch (IOException e) {
                System.err.println("Failed to load hotbar configuration: " + e.getMessage());
            }
        }
        
        currentConfig = new HotbarConfig();
        return currentConfig;
    }
    
    public static HotbarConfig getCurrentConfig() {
        if (currentConfig == null) {
            load();
        }
        return currentConfig;
    }
    
    private static Path getConfigPath() {
        return FabricLoader.getInstance()
                .getConfigDir()
                .resolve(CONFIG_FILE_NAME);
    }
}
