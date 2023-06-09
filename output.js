const fs = require('fs');

// 读取文本文件的内容
const fileContent = fs.readFileSync('output.txt', 'gbk');
console.log(fileContent, 'fileContent')
// 根据换行符拆分为每一行
const lines = fileContent.split('\n');

// 格式化每一行为 Markdown 列表项
const formattedLines = lines.map(line => `- ${line}`);
console.log(formattedLines, 'formattedLines')
// 将格式化后的列表项合并为一个字符串
const markdownOutput = formattedLines.join('\n');

// 将 Markdown 输出保存到文件
fs.writeFileSync('directory.md', markdownOutput, 'utf-8');
