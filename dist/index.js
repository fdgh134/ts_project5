"use strict";
<<<<<<< HEAD
// 클래스 정의하기
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`안녕! 나는 ${this.name}이고, ${this.age}살이야`);
    }
}
const person = new Person('yoom', 32);
person.sayHello();
=======
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("동물 소리");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // 베이스 클래스에 생성자를 호출
        this.age = 5;
    }
    makeSound() {
        console.log("멍멍!");
    }
    eat() {
        console.log("강아지가 사료를 먹습니다");
    }
}
class Cat extends Animal {
}
const dog = new Dog("백구");
dog.makeSound();
const cat = new Cat("삼색");
cat.makeSound();
const dog2 = new Dog("또순이");
const animal = dog2; // upcasting
animal.makeSound(); // 슈퍼타입(Animal)으로 변환되어 eat 메서드 호출 X
let animal2;
animal2 = new Dog("또왔순이");
const realDog = animal;
realDog.eat();
>>>>>>> 541beae39a997db61985ffc932f21bc8a8691d7e
