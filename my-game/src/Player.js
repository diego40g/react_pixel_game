import Entity from "./Entity";

class Player{
    attributes={
        name: 'Player',
        ascii: '@',
        health: 10
    }

    move(dx,dy){
        this.x+=dx;
        this.y+=dy;
    }

    copyPlayer(){
        let newPlayer=new Player();
        Object.assign(newPlayer,this);
        return newPlayer;
    }
}

export default Player;
