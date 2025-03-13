const obj = {
  flag: 'Jhon',
  func: function () {
    console.log(this);
    console.log(this.flag);
  }
};

const p = new Proxy(obj, {});
p.func();
obj.func();