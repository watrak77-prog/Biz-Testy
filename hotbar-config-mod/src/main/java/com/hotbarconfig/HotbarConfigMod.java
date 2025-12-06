package com.hotbarconfig;

import com.hotbarconfig.command.SaveCommand;
import com.hotbarconfig.config.ConfigManager;
import com.hotbarconfig.keybind.KeybindHandler;
import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.command.v2.ClientCommandRegistrationCallback;

public class HotbarConfigMod implements ClientModInitializer {
    public static final String MOD_ID = "hotbarconfig";
    
    @Override
    public void onInitializeClient() {
        // Initialize configuration
        ConfigManager.init();
        
        // Register keybinds
        KeybindHandler.register();
        
        // Register commands
        ClientCommandRegistrationCallback.EVENT.register(SaveCommand::register);
        
        System.out.println("Hotbar Configuration Mod initialized!");
    }
}
