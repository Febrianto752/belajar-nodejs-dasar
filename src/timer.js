import timers from "timers/promises";

// console.log(new Date());
// const name = await timers.setTimeout(1000, "febrianto");
// console.log(new Date());
// console.log(name);

// /* contoh output :
//   2023-05-02T10:08:16.433Z
//   2023-05-02T10:08:17.449Z
//   febrianto
// */

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.log(startTime); // output : "ignored"
  console.log("start time at : " + new Date());
}
