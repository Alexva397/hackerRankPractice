
const num = 9;
const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// function sockMerchant(n, ar) {
//     if (!ar || ar.length !== n) return 0;

//     let pairTotal = 0;

//     let sockColorCount = new Map();

//     //  iterate throught socks
//     for (let i = 0; i < n; i++) {
//         const sock = ar[i];

//         //  count pairs of socks
//         if (!sockColorCount.has(sock)) {
//             sockColorCount.set(sock, 1);
//         } else {
//             const newCount = sockColorCount.get(sock) + 1;
//             sockColorCount.set(sock, newCount);
//         }
//     }

    
//     for (let color of sockColorCount.keys()) {
//         const pairs = sockColorCount.get(color);

//         pairTotal += Math.floor(pairs / 2); 
//     }
//     return pairTotal;
// }

// console.log(sockMerchant(num, array));




function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
} 

console.log(sockMerchant(num, array))