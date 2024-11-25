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

const dog2: Dog = new Dog("또순이");
const animal: Animal = dog2; // upcasting
animal.makeSound(); // 슈퍼타입(Animal)으로 변환되어 eat 메서드 호출 X

let animal2: Animal;
animal2 = new Dog("또왔순이");

const realDog: Dog = animal as Dog;
realDog.eat(); // 서브타입(Dog)로 변환되어 eat 메서드 호출 O