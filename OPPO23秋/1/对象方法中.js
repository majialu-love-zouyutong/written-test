const obj1 = {
  name: '小猪佩奇',
};

const obj2 = {
  name: '小猪乔治',
  sisterName: super.name, // 错误用法，super当作对象只能在方法中使用
  getSisterName() {
    return super.name;
  },
};
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.sisterName);
console.log(obj2.getSisterName());
