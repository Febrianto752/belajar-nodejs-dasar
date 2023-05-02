import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("say", (name) => {
  console.log("Hello " + name);
});

emitter.addListener("say", (name) => {
  console.log("Halo " + name);
});

emitter.emit("say", "febri"); // output : Hello febri \n Halo febri
