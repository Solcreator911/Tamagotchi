let idMascot = 1;
let idOwner = 1;
let idGame = 1;

class Animal {
    constructor(name, owner, type, age, hunger, love, play, health, cleaness, sleep) {
        this.name = name;
        this.owner = owner;
        this.type = type;
        this.age = age;
        this.hunger = hunger;
        this.love = love;
        this.play = play;
        this.health = health;
        this.cleaness = cleaness;
        this.sleep = sleep;
        this.animal = idMascot++;
        this.owner = idOwner++;
        this.game = idGame++;

    }
}

class Game {
    constructor(Animal) {
        this.animal = Animal;
    }
}

class System {
    constructor() {
        this.animals = [(new Animal("Walter", "Sol", "Owl", 0, 100, 100, 100, 100, 100, 100))]
        this.games = [(new Game(this.animals[0]))]
    }


noExisting(name, owner,type){
for(let i = 0; i < this.animals.length; i++){
    let actualGame = this.animals[i];
    if(actualGame.name === name && actualGame.owner === owner && actualGame.type === type){
        return true; // The animal already exists
    }
}
return false; // The animal does not exist
}



}



