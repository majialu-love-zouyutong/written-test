const p = Promise.resolve(935);
const result = p.then((val) => {
  return val;
})
  .then((val) => {
    console.log(val);
    return new Promise((res, rej) => {
      res(++val);
    });
  })
  .then((val) => {
    console.log(val);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(++val);
      }, 1000);
    });
  })
  .then((val) => {
    console.log(val);
  });


setTimeout(() => {
  console.log(result);
}, 2000);