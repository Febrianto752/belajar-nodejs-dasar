// const buffer = Buffer.from("febrianto");

// console.log(buffer);
// console.log(buffer.toString()); // output : febrianto

// console.log(buffer.reverse());
// console.log(buffer.toString()); // output : otnairbef

const buffer2 = Buffer.from("febrianto", "utf8");

console.log(buffer2.toString()); // output : febrianto
console.log(buffer2.toString("hex")); // output : 6665627269616e746f
console.log(buffer2.toString("base64")); // output : ZmVicmlhbnRv

const bufferBase64 = Buffer.from("ZmVicmlhbnRv", "base64");
console.log(bufferBase64.toString("utf8")); // output : febrianto
