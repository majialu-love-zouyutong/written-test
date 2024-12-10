const child = {
  myParent() {
    console.log(super); // SyntaxError: 'super' keyword unexpected here
  },
};

// class Base {
//   foo() {}
// }
// class Derived extends Base {
//   delete() {
//     delete super.foo; // this is bad
//   }
// }

// new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
