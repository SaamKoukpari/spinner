process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinArr= "\r|\r/\r-\r\\\r|";
let spin = 0
for (const char of spinArr) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, spin)
  spin += 100
};

setTimeout(() => {
  process.stdout.write(("\n"));

}, 1000);


