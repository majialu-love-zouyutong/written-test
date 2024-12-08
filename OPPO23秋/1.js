let obj1 = {
  name: '张三',
  getName() {
    return this.name;
  },
};

let obj2 = {
  name: '李四',
  getName() {
    return super.getName();
  },
};

Object.setPrototypeOf(obj2, obj1);
console.log(obj2.getName());

// super 调用时的上下文仍然是当前对象，即this 指向当前对象。
