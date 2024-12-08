function Animal(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

function Dog(name, age, color, type) {
  // this.name = name;
  // this.age = age;
  // this.color = color;
  Animal.call(this, name, age, color);
  this.type = type;
}

Dog.__proto__ = Animal.prototype;

const dog = new Dog("小黑", 3, "黑色", "秋田犬");
console.log(dog);