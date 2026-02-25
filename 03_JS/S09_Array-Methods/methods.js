var data = [10, 20, true, "sagar", 10, { city: "pune" }, [1, 2, 3]];

//slice : [20,true,"sagar"] : array.slice(startIndex,lastIndex+1)
var subArray = data.slice(2, 5 + 1);
console.log(subArray);

console.log();
console.log("-------------------------");
console.log();

// console.log(data.length);

//indeXOf
var indexNumber = data.indexOf(10);
console.log(indexNumber);
//why

//lastIndexOf
var indexNumber = data.lastIndexOf(10);
console.log(indexNumber);
