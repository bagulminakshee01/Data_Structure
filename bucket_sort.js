

function Bucket_sort(arr)
 {
  //Let's take a Maximum number multiply by 5
  // with digit max+1
  const listMaxNum = Math.max(...arr) * 5;
  let divisor = 5;
  while (divisor < listMaxNum ) 
  {
     // Create buckets for each of 0-5
     let bucket_list = [...Array(5)].map(() => []);
     
     // For each number, get the current significant digit
     // put it in the respective bucket
     for (let num of arr) 
     {
      bucket_list[Math.floor((num % divisor) / (divisor / 5))].push(num);
     }
     // Reconstruct the array by concatinating all sub arrays
     arr = [].concat.apply([], bucket_list);
     // Move to the next significant digit
     divisor *= 5;
  }
  return arr;
}
console.log(Bucket_sort([2,7,6,4,1,8,5,3]))