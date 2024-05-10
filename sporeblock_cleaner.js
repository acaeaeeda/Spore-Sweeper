LevelEvents.tick(event=> {
    event.level.entities.filterSelector("@e[type=immersiveengineering:chemthrower_shot]").forEach(entity => {
        if(entity.isOnFire()){
            var block = entity.block
            var target_block = block.id.toString()

            if(block.id.toString().startsWith("spore")){
                var replacement = null

                switch (target_block) {
                    case 'spore:membrane_block':
                    case 'spore:calcified_biomass_block':
                    case 'spore:sicken_biomass_block':
                    case 'spore:biomass_block':
                    case 'spore:rooted_biomass':
                    case 'spore:brain_remnants':
                    case 'spore:growths_big':
                    case 'spore:growths_small':
                    case 'spore:blomfung':
                    case 'spore:bloomfung2':
                    case 'spore:fungal_roots':
                    case 'spore:growth_mycelium':
                    case 'spore:fungal_stem_sapling':
                    case 'spore:mycelium_veins':
                    case 'spore:biomass_lump':
                        replacement = 'minecraft:air';
                        break;
                    
                    case 'spore:infested_red_sand':
                    case 'spore:infested_stone':
                    case 'spore:infested_soul_sand':
                    case 'spore:infested_sand':
                    case 'spore:infested_netherrack':
                    case 'spore:infested_gravel':
                    case 'spore:infested_end_stone':
                    case 'spore:infested_dirt':
                    case 'spore:infested_deepslate':
                    case 'spore:infested_clay':
                    case 'spore:infested_cobblestone':
                    case 'spore:infested_cobbled_deepslate':
                        replacement = target_block.replace("spore:infested_","minecraft:");
                        break;
                    
                    case 'spore:infested_laboratory_block3':
                    case 'spore:infested_laboratory_block2':
                    case 'spore:infested_laboratory_block1':
                    case 'spore:infested_laboratory_block':
                        replacement = target_block.replace('spore:infested_laboratory','spore:lab');
                        break;
                    
                    case 'spore:hive_spawn':
                        replacement = 'minecraft:zombie_head';
                        break;
                    case 'spore:remains':
                        replacement = 'minecraft:skeleton_skull';
                        break;
                    case 'spore:overgrown_spawner':
                        replacement = "minecraft:spawner";
                        break;
                    

                    default:
                        break;
                }
                console.info(Block.id(replacement).blockState)
                if (replacement != null){
                    //event.level.removeBlock(block.pos,true)
                    event.level.setBlock(block.pos,Block.id(replacement).blockState,70)
                }
                
                
            }
        }
    })
})
