//implement stack-using_queue.js

//add elements to q2

//delete elements from q1 and move to q2

//swap the q1 and q2


// function runProgram(input){

//    let arr = input.split(" ").map(Number);

//   let q1 = [];
//   let q2 = [];
  

//   for(let i =0;i<arr.length;i++){

//     q2.push(arr[i]);
    
//     while(!q1.length===0){
      
//         let front = q1.shift();
//         console.log(front);
//         q2.push(front);
        

//     }

//     let temp = q1;

//     q1 = q2;
//     q2 = temp;

//   }

//   console.log(q1);

// }

// if(process.env.USER === 'rajatrana'){
//  runProgram(`1 2 3 4 5 6`)
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//  read += input;
// });
// process.stdin.on("end", function () {
//  read = read.replace(/\n$/,"")
// runProgram(read);
// });

// process.on("SIGINT", function () {
//  read = read.replace(/\n$/,"")
//  runProgram(read);
//  process.exit(0);
// });

