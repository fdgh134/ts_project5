class Animal {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  makeSound() {
    console.log("동물 소리");
  }
}

class Dog extends Animal {
  age: number;

  constructor(name: string){
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

class Cat extends Animal {}

const dog = new Dog("백구");

dog.makeSound();

const cat = new Cat("삼색");
cat.makeSound();