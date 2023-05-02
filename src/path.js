import path from "path";

// const pathUrlWindows = "C:\\Users\\febrianto\\Desktop\\latihan_nodejs\\src\\path.js";
const pathUrl = "/Users/febrianto/Desktop/index.html";

console.log(path.dirname(pathUrl)); // output : /Users/febrianto/Desktop
console.log(path.basename(pathUrl)); // output : index.html
console.log(path.extname(pathUrl)); // output : .html
