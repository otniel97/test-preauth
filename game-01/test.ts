function sum(arrayNumbers:Array<number>, result:number): Array<number> {
  let arrayResult: Array<number> = [];
  for(let i=0; i<arrayNumbers.length -1; i++) {
    for(let j=i+1; j<arrayNumbers.length; j++) { // we compare the array element to its successors
      if (arrayNumbers[i] + arrayNumbers[j] === result){ 
        arrayResult.push(arrayNumbers[i],arrayNumbers[j]); // when we get the desired result of the sum we return the pair of numbers in an array
        return arrayResult;
      }
    }
  }
  return arrayResult;
}
console.log(sum([2, 5, 8, 14, 2, 7], 10));