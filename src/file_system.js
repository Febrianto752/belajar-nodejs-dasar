import fs from "fs/promises";

const buffer = await fs.readFile("path.js");

// console.log(buffer);
console.log(buffer.toString());

// akan membuat file bernama tmp.txt di directory yang dipakai dalam menjalankan program
fs.writeFile("tmp.txt", "Hello World");
