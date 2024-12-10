class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    // 这里要注意，在派生类的构造函数中调用super()，必须在使用this之前调用
    // 相当于调用了父类的构造函数
    super(name); 
    this.age = age;
  }
}

const dog = new Dog('旺财', 3);
console.log(dog.name); // 旺财
console.log(dog.age); // 3
