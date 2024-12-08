class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name); // 相当于调用了父类的构造函数
    this.age = age;
  }
}

const dog = new Dog('旺财', 3);
console.log(dog.name); // 旺财
console.log(dog.age); // 3
