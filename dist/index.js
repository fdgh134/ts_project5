"use strict";
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
