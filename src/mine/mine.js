class Animal{
    constructor(){
        this.target = target;
    }
    run(){
        this.target.run();
    }
}


class Dark{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    run(){
        console.log('小鸭子'+this.name+'跑起来了')
    }
}



var kimi = new Animal(new Dark('kimi',18))

kimi.run();

var animale = new Animate(new translate());
animate.exec();