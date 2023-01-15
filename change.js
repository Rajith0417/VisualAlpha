const countCoins = (amount) => {
  if (amount >= 1) {
    let notes = [100, 25, 10, 5, 1];
    let coinsCounter = Array(5).fill(0);

    // count coins using Greedy approach
    for (let i = 0; i < 5; i++) {
      if (amount >= notes[i]) {
        coinsCounter[i] = Math.floor(amount / notes[i]);
        amount = amount % notes[i];
      }
    }
    console.log(coinsCounter.reverse()); //array reverse as requested on readme
  } else {
    console.log("Wrong input");
  }
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter Amount", (amount) => {
  countCoins(amount);
  readline.close();
});
