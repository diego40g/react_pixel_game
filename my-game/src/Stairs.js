import Entity from "./Entity";
import Spawner from "./Spawner";

class Stairs extends Entity {
    attributes={
        name:'Stairs',
        color:'blue',
        ascii: '>',
        offset:{x:2,y:2}
    };
    action(verb,world){
        if(verb==='bump'){
            world.addToHistory('Bajo sus caracteristicas..');
            world.createCellularMap();
            world.player.x=0;
            world.player.y=0;
            world.moveToSpace(world.player);
            world.entities=world.entities.filter(e=>e===world.player);
            let spawner=new Spawner(world);
            spawner.spawnLoot(10);
            spawner.spawnMonster(6);
            spawner.spawnStairs();
        }
    }
}

export default Stairs;