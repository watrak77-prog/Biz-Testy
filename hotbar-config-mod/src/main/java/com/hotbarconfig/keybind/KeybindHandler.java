package com.hotbarconfig.keybind;

import com.hotbarconfig.manager.HotbarManager;
import net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientTickEvents;
import net.fabricmc.fabric.api.client.keybinding.v1.KeyBindingHelper;
import net.minecraft.client.option.KeyBinding;
import net.minecraft.client.util.InputUtil;
import org.lwjgl.glfw.GLFW;

public class KeybindHandler {
    private static KeyBinding saveKeybind;
    private static KeyBinding restoreKeybind;
    
    public static void register() {
        saveKeybind = KeyBindingHelper.registerKeyBinding(new KeyBinding(
            "key.hotbarconfig.save",
            InputUtil.Type.KEYSYM,
            GLFW.GLFW_KEY_R,
            "category.hotbarconfig"
        ));
        
        restoreKeybind = KeyBindingHelper.registerKeyBinding(new KeyBinding(
            "key.hotbarconfig.restore",
            InputUtil.Type.KEYSYM,
            GLFW.GLFW_KEY_V,
            "category.hotbarconfig"
        ));
        
        ClientTickEvents.END_CLIENT_TICK.register(client -> {
            while (saveKeybind.wasPressed()) {
                HotbarManager.saveHotbarConfiguration();
            }
            
            while (restoreKeybind.wasPressed()) {
                HotbarManager.restoreHotbarConfiguration();
            }
        });
    }
}
