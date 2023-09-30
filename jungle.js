class Jungle{
    constructor(name) {
        this.name = name
        this.animals = ['tigers', 'monkeys', 'snakes'];
        this.food = ['fish','grains','meat']
    }

    soundOff() {

    }
}

class Animal{
    constructor(name,energy = 0) {
        this.name = name;
        this.energy = energy;
    }

    sound() {
        this.energy -= 3
    }
    eatFood(food){
        this.energy += 10
    }

    sleep() {
        this.energy += 5
    }
}


class Tiger extends Animal{
    constructor(name, energy){
        super(name, energy)
    }
    sound(){
        super.sound()
        return 'The tiger roars.';
    }

    sleep(){
        super.sleep()
        this.energy += 5
    }

    eat(food){
        if(food === "grain"){
            return  'I cant it that!';
        }
        else{
          super.eat()
        }
    }

}

class Monkey extends Animal{
    constructor(name, energy){
        super(name, energy)
    }
    sound(){
        super.sound()
        this.energy -= 4
    }

    sleep(){
        super.sleep()
        this.energy += 5
    }

    eat(food){
          super.eat()
          this.energy += 2
    }

    play() {
        if(this.energy >= 8) {
            this.energy -= 8;
            return 'Oooo Oooo'
        } else {
            return 'I’m too tired'
        }
    }


}

class Snake extends Animal{
    constructor(name, energy){
        super(name, energy)
    }
    sound(){
        super.sound()
    }

    sleep(){
        super.sleep()
    }

    eat(food){
        super.eat()
    }
}

class Food{

}

class Fish extends Food{
    constructor() {
        super("fish")
    }

}

class Grain extends Food {
    constructor() {
        super("grain")
    }
}

class Meat extends Food {
    constructor() {
        super("meat")
    }

}



const jungle = new Jungle();
const animals = new Animal();
const food = new Food();
const snake = new Snake();
const monkey = new Monkey();
const tiger = new Tiger();
const meat = new Meat();
const fish = new Fish();
const grain = new Grain();