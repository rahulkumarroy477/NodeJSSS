const data = require('./features');

console.log(data.x);

const arr = [30,20,40,50,1,6,7];

// creating copy of arr
// method 1 --> using filter
    // const newArr =arr.filter((item)=>{
    //     return item;
    // })
    
// method 2 --> using spread operator
    // const newArr = [...arr];

// method 3 --> using slice operator
    // const newArr = arr.slice();

// method 4 -->using map
    // const newArr = arr.map((item)=>item);

//  method 5 --> using Array.from(), method it can convert object to arrays
    // const newArr = Array.from(arr);

// method 6 --> concat to merge arrays
    // const newArr = arr.concat();


// console.log(arr===newArr);
