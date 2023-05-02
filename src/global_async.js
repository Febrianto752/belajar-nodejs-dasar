function samplePromise() {
  return Promise.resolve("hello world");
}

const word = await samplePromise();
console.log(word);
