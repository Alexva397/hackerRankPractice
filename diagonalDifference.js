

function diagDiff(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  console.log(Math.abs(d1 - d2))
  return Math.abs(d1 - d2);
  
}

diagDiff([3, 11, 2, 4, 4, 5, 6, 10, 8, -12])