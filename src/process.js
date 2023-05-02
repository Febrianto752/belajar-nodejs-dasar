import process from "process";

// event yang dijalankan di akhir program
process.addListener("exit", (exitCode) => {
  console.log("NodeJS exit with code " + exitCode);
});

console.log(process.version); // contoh output : v16.13.1
console.table(process.argv);
console.table(process.report);
console.table(process.env); // daftar environment variabel di sistem operasi

process.exit(1);

// tidak akan di jalankan karena event exit sudah dijalankan/dipanggil
console.log("Akhir program");
