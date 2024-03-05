let counter = 0;
console.log(counter);

let count = async () => {
  while (true) {
    counter++;
  await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      console.log(counter);
    });
  }
};

count();
