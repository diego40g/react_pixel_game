import Loot from './Loot.js'

const lootTable=[
    {name:'Espada',color:'darkgrey',ascii:'/', offset:{x:6,y:3}},
    {name:'Posicion Vida',color:'red',ascii:'¡', offset:{x:6,y:3}},
    {name:'Moneda Oro',color:'yellow',ascii:'$', offset:{x:3,y:3}},
    {name:'Armadura',color:'lightgrey',ascii:'#', offset:{x:4,y:3}}
]

class Spawner{
    constructor(world){
        this.world=world
    }
    spawn(spawnCount,createEntity){
        for(let count=0;count<spawnCount;count++){
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }

    spawnLoot(spawnCount){
        this.spawn(spawnCount,()=>{
            return new Loot(
                getRandomInt(this.world.width),
                getRandomInt(this.world.height),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)]);
        });
    }
}

function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

export default Spawner;