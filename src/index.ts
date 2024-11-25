// 클래스 정의하기
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`안녕! 나는 ${this.name}이고, ${this.age}살이야`);
  }
}

const person = new Person("yoom", 32);
person.sayHello();

// typescript 접근 제한자
// public
// - 클래스 외부에서도 접근이 가능한 접근 제한자
// - 접근 제한자가 선언이 안되어있다면 기본적으로 public

// private
// - 클래스 내부에서만 접근이 가능한 접근 제한자
// - 보통은 클래스 속성을 private로 설정함

// protected
// - 클래스 내부와 해당 클래스를 상속받는 자식 클래스에서만 접근 가능

// 사례
class Person2 {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public sayHello() {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}


// 상속
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
