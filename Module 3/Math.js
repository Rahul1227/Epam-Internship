let arr=[2,1,44,2,3,2,99999];

console.log(Math.max(...arr));
console.log(Math.min(...arr));


// testing the every method
let arr2=[1,2,4,6,8];
let result =arr2.every(x=>x%2===0)
console.log("-----------------Testing the every method--------------------------");
console.log(result);

let anyResult=arr2.some(x=>x%3===0);
console.log(anyResult);


//testing the search method
let arr3=[1,2,3,4,5,6,15];

let searchResult=arr3.find(x=>x>10);
console.log(searchResult);
process.stdout.write(`And the index is : ${arr3.indexOf(searchResult)}\n`);
let searchResult2=arr3.find(x=>x>100);
console.log(searchResult2);