const rl = require('readline').createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  // 定义正则匹配规则
  const reg = /^[A-Z][a-z]*$/;
  // 读入数据数量
  const n = parseInt(await readline());
  for (let i = 0; i < n; i++) {
    // 逐个读入单词
    const word = await readline();
    console.log(reg.test(word) ? 'YES' : 'NO');
  }
  rl.close();
})();
