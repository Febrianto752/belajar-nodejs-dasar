import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("febri");
writer.write("anto");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", function (data) {
  console.log(data.toString()); // output : febrianto
  reader.close();
});
