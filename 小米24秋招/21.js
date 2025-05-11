const sort = (arr) => {
  // 指针
  let p = 0;

  // 遍历把0归位
  for (let i = 0; i < arr.length; i++) {
    // 如果当前元素是0，则交换p和i对应的值
    if (arr[i] === 0) {
      [arr[p], arr[i]] = [arr[i], arr[p]];

      // 指针右移一位
      p++;
    }
  }

  // 遍历把1归位
  for (let i = 0; i < arr.length; i++) {
    // 如果当前元素是1，则交换p和i对应的值
    if (arr[i] === 1) {
      [arr[p], arr[i]] = [arr[i], arr[p]];

      // 指针右移一位
      p++;
    }
  }
  return arr;
}

// 测试
const arr = [0, 1, 1, 0, 2, 2, 1, 0, 0, 1, 2, 2, 2,];
console.log(sort(arr));