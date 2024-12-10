class Animal {
  constructor(name) {
    this.name = name;
  }
  static age = 10;
  age = 20;
}
Animal.prototype.age = 30;

class Dog extends Animal {
  constructor(name, age) {
    super(name); // 相当于调用了父类的构造函数
    this.age = age;
  }
  getName() {
    return super.getName();
    // // 相当于
    // return this.__proto__.getName.call(this);
  }
  getAge() {
    return super.age;
  }
  static getAge() {
    return super.age;
  }
}
const dog = new Dog('旺财', 3);
console.log(dog.getAge());
console.log(Dog.getAge());
