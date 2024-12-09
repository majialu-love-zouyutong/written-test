class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

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
}
const dog = new Dog("旺财", 3);
console.log(dog.getName());
