import os from "os";

console.log(os.platform()); // output : win32
console.log(os.arch()); // output : x64
console.log(os.uptime()); // output : 530569
console.log(os.totalmem()); // output : 17042952192 byte = 16gb
console.log(os.freemem()); // output : 9718980608 byte
console.table(os.networkInterfaces());
console.table(os.cpus());
