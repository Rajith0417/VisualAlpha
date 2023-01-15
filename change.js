const convertToCoins = (coinsList, coinsCountList) => {
  let outPutArray = [];
  coinsCountList.forEach((element, i) => {
    if (element > 0) {
      outPutArray.push.apply(outPutArray, Array(coinsCountList[i]).fill(coinsList[i]));
    }
  });
  //console.log(outPutArray);
  return outPutArray;
}

const countCoins = (amount) => {
  if (amount >= 1) {
    let coinsList = [100, 25, 10, 5, 1];
    let coinsCounter = Array(5).fill(0);

    // count coins using Greedy approach
    for (let i = 0; i < 5; i++) {
      if (amount >= coinsList[i]) {
        coinsCounter[i] = Math.floor(amount / coinsList[i]);
        amount = amount % coinsList[i];
      }
    }

    console.log(convertToCoins(coinsList, coinsCounter).reverse()); //array reverse as requested on readme
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
