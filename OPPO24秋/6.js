const p1 = Promise.resolve(117);
const p2 = Promise.resolve(p1);
const p3 = Promise.resolve(117);
console.log(p1 == p2, p1 === p2, p1 === p3);
