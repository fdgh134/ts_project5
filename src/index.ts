// 클래스 정의하기
/*
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
*/

// 상속
/*
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
*/

// 추상 클래스
// 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제하는 용도
// 핵심 기능의 구현은 전부 자식 클래스에게 위임!
// 추상 클래스, 추상 함수는 abstract 키워드를 사용해 정의
/*
abstract class Shape {
  abstract getArea(): number; // 추상 함수 정의

  printArea(){
    console.log(`도형 넓이: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number { // 원의 넓이를 구하는 공식
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number { // 사각형 넓이를 구하는 공식
    return this.width * this.height;  
  }
}

const circle = new Circle(5);
circle.printArea();

const rectangle = new Rectangle(5, 8);
rectangle.printArea();
*/

// 인터페이스
// - TS에서 객체의 타입을 정의하는드ㅔ 사용
// - 객체가 가져야 하는 속성과 메서드를 정의
// - 인터페이스를 구현한 객체는 인터페이스를 반드시 준수해야함
// - 코드의 안정성을 높이고 유지 보수성을 향상시킬 수 있음
// 추상 클래스와의 차이?
// - 추상 클래스 : 클래스의 기본 구현을 제공
// - 인터페이스 : 객체의 구조만을 정의하고 기본 구현을 제공하지 않음
// 상속 메커니즘
// - 추상 클래스 : 단일 상속만 지원
// - 인터페이스 : 다중 상속 지원 / 여러 인터페이스 구현 가능
// 구현 메커니즘
// - 추상 클래스 : 상속받은 자식 클래스는 반드시 추상 함수를 구현해야함
// - 인터페이스 : 인터페이스에 정의된 모든 메서드를 전부 구현해야함
// 언제 사용하나?
// 기본 구현을 제공하고 상속을 통해 확장할 때 -> 추상클래스
// 객체가 완벽하게 특정 구조를 준수하도록 강제하고 싶을 때 -> 인터페이스

// 객체 지향 설계 원칙 - S.O.L.I.D
// - S(SRP.단일 책임 원칙)
// 클래스는 하나의 책임만 가져야 한다
// ex) 유저 서비스라는 클래스는 유저 관련 액션만 해야함.
// - O(OCP.개방 폐쇄 원칙)
// 클래스는 확장에 대해서는 열려 있어야 하고 수정에 대해서는 닫혀 있어야 한다
// 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야함
// 인터페이스나 상속을 통해 해결 가능
// - L(LSP.리스코프 치환 법칙)
// 서브타입은 기반이 되는 슈퍼타입을 대체할 수 있어야 한다
// 자식 클래스는 부모 클래스의 기능을 수정하지 않고도 부모 클래스와 호환되어야 한다
// 논리적으로 엄격하게 관계가 정립이 되어야 한다
// - I(ISP.인터페이스 분리 원칙)
// 클래스는 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 한다
// 클레스에 무의미한 메소드의 구현을 막자
// 인터페이스를 너무 크게 정의하기보단 필요한 만큼만 정의하고 클래스는 입맛에 맞게 필요한
// 인터페이스들을 구현하도록 유도
// - D(DIP.의존성 역전 원칙)
// 웹 서버 프레임워크 내에서 많이 나오는 원칙
// 하위 수준 모듈보다 상위 수준 모듈에 의존을 해야한다
// 데이터베이스라는 클래스가 있다고 가정
// 데이터베이스의 원천은 로컬 스토리지가 될 수 있고 클라우드 스토리지가 될 수 있다.
// 이때, 데이터베이스의 원천을 로컬 스토리지 타입 혹은 클라우드 스토리지 타입으로 한정하는 것이 아니라
// 그보다 상위 수준 스토리지 타입으로 한정을 하는것이 맞다.