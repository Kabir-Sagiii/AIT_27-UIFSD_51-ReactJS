var data = [10, 20, 30, "hello", true, false, 54];

console.log(data);
console.log();

//includes
var status = data.includes("hello123");
console.log(status);

//splice : removing + adding + updating
// array.splice(startIndex,count)
// //removing
// data.splice(4, 1);
// console.log(data);

//array.splice(indexNumber,0,new-element)
// data.splice(3, 1, "Sagar");
// console.log(data);

// //pop
// data.pop();
// data.pop();

// //shift
// data.shift();
// data.shift();

// console.log(data);
// //push
// //  arrayName.push(newElement)
// data.push("Kabir", 100, true);

// console.log(data);

//unshift
//arrayName.unshift(element)
// data.unshift({ name: "rohan" });
// console.log(data);
