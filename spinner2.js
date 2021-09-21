process.stdout.write('hello from spinner1.js... \rheyyy\n');

const sentence = "\r|\r/\r-\r\\\r|";
let delay = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, delay)
  delay += 100
};

setTimeout(() => {
  process.stdout.write(("\n"));

}, 1000);


