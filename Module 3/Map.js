
//declaring map
const numMap=new Map([
    ['one',1],
    ['two',2],
])


console.log(numMap);

// set method ==> Insert elemeent into the map

numMap.set("three",3);

//get method ==> to get the value by passing the key
let res=numMap.get("three")
console.log("Checking the get method of map", res);
console.log(numMap);

//has method ==> to check if the key is present or not in the map
console.log(numMap.has("five"))
console.log(numMap.has("one"))