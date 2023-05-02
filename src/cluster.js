import cluster from "cluster";

import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  console.log("primary id ", process.pid);

  cluster.addListener("exit", function (worker) {
    console.log(`Worker ${worker.id} is exited`);
    cluster.fork(); // setelah di mati dihidupkan kembali
  });
}

if (cluster.isWorker) {
  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  });

  server.listen(3000);
  console.log("Start cluster worker", process.pid);
}
