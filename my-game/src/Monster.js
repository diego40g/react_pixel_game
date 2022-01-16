import Entity from "./Entity";

class Monster extends Entity{
    action(verb,world){
        if(verb==='bump'){
            //attack
            world.addToHistory(`Ataque Jugador ${this.attributes.name}!`);
            this.attributes.health=this.attributes.health-1;
            if(this.attributes.health<=0){
                world.addToHistory(`${this.attributes.name} muerto :'(`);
                world.remove(this);
            }else{
                world.addToHistory(`${this.attributes.name} health = ${this.attributes.health}`);
                world.player.attributes.health=world.player.attributes.health-1;
                if(world.player.attributes.health<=0){
                    world.addToHistory(`Usted se murio :/`);
                }else{
                    world.addToHistory(
                        `Tienes ${world.player.attributes.health} pto de vida`
                    );
                }
            }
        }
    }
}
export default Monster;