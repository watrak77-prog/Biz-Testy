package com.hotbarconfig.command;

import com.hotbarconfig.manager.HotbarManager;
import com.mojang.brigadier.CommandDispatcher;
import net.fabricmc.fabric.api.client.command.v2.ClientCommandManager;
import net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource;
import net.minecraft.command.CommandRegistryAccess;

public class SaveCommand {
    
    public static void register(CommandDispatcher<FabricClientCommandSource> dispatcher, CommandRegistryAccess registryAccess) {
        dispatcher.register(
            ClientCommandManager.literal("save")
                .executes(context -> {
                    HotbarManager.saveHotbarConfiguration();
                    return 1;
                })
        );
    }
}
