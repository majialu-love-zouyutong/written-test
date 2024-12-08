const rl = require('readline').createInterface({
  input: process.stdin,
});
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // 读入点数n, 点权和下限x
  const [n, x] = (await readline()).split(' ').map(Number);
  // 收集点的信息
  const points = [];
  for (let i = 0; i < n; i++) {
    const [a, b, v] = (await readline()).split(' ').map(Number);
    // 计算距离并存储点信息
    const distance = Math.sqrt(a * a + b * b);
    points.push({ distance, v });
  }
  // 按照距离升序排序
  points.sort((p1, p2) => p1.distance - p2.distance);

  // 将圆的半径从零开始扩大,依次将点的权值加和
  let sum = 0;
  for (const { distance, v } of points) {
    sum += v;
    if (sum >= x) {
      console.log(distance);
      return;
    }
  }

  // 如果所有点的权值加起来都达不到下限x
  if (sum < x) {
    console.log(-1);
  }
})();
