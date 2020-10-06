console.log("================================");
console.log("Jawaban soal 1");

class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get animalName(){
        return this.name;
    }
    set animalName(x){
        this.name = x;
    }
    get animalLegs(){
        return this.legs;
    }
    get animalColdBlooded(){
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.animalName);
console.log(sheep.animalLegs);
console.log(sheep.animalColdBlooded);

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        console.log("hop hop");
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

console.log("================================");
console.log("Jawaban soal 2");

class Clock {
    constructor(template) {
        this.template = template;
        this.timer
    }
    stop() {
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

        console.log(output);
    }
}

var clock = new Clock('h:m:s');
clock.start(); 