function countCoins(amount)
    {
        let notes = [ 100, 25, 10, 5, 1 ];
        let coinsCounter = Array(5).fill(0);
        
        // count coins using Greedy approach
        for (let i = 0; i < 5; i++) {
            if (amount >= notes[i]) {
                coinsCounter[i] = Math.floor(amount / notes[i]);
                amount = amount % notes[i];
            }
        }
        console.log(coinsCounter);
    }
     
 
// driver code
 
    let amount = 400;
    countCoins(amount);
