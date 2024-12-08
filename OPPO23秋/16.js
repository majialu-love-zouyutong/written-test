const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    // 读入数据数量
    const reg = /^[A-Z][a-z]*$/;
    const n = parseInt(await readline());
    for (let i = 0; i < n; i++) {
        const word = await readline();
        console.log(reg.test(word) ? "YES" : "NO");
    }
})();
