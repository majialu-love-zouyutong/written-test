const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

// 计算两个数的最大公约数（GCD）
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let lines = [];
// 读取每一行输入并存储到数组中
rl.on("line", (line) => {
    lines.push(line.trim());
});

rl.on("close", () => {
    // 第一行输入为数组的长度
    const n = parseInt(lines[0]);
    // 第二行输入为数组元素，转换为数字数组
    const a = lines[1].split(" ").map(Number);

    // 创建前缀和数组，用于快速计算子数组和
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + a[i];
    }

    // 计算整个数组的总和
    const total = prefix[n];
    let maxGCD = 0;

    // 遍历数组，计算每个分割点的GCD，并找到最大值
    for (let i = 1; i < n; i++) {
        const s1 = prefix[i]; // 前i个元素的和
        const s2 = total - s1; // 剩余元素的和
        const currentGCD = gcd(s1, s2); // 计算当前分割点的GCD
        if (currentGCD > maxGCD) {
            maxGCD = currentGCD;
        }
    }

    // 输出最大GCD
    console.log(maxGCD);
});