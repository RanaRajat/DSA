
// Can be sorted ? Ended
// Description

// Given an array of distinct n integers. Check whether reversing one sub-array make the array sorted or not.

// If the array is already sorted or by reversing a subarray once make it sorted, print “YES”, else print “NO”.


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print output string in a single line.


// Sample Input 1 

// 10
// -1 0 1 2 3 10 9 7 6 4
// Sample Output 1

// YES
// Hint

// The given array can be sorted if we reverse the subarray [10,9,7,6,4]

function check(sub,arr,output,index){
    if(index === arr.length){
        sub.push(output);
        return;
    }
    check(sub,arr,[...output],index+1);
    output.push(arr[index]);
    check(sub,arr,[...output],index+1);
}
function checkPow(a,p){
    if(a.length!==0){
        let sum = 0;
        for(let i =0;i<a.length;i++){
            sum = sum+Math.pow(a[i],p);
        }
        return sum;
    }
}
function runProgram(input){

   
let arr = input.split(" ").map(Number);

let n = arr[0];

let p = arr[1];



  
  let count = 0;
  let sum = 0;
  let N =(Math.floor(Math.pow(n,1/p)))
     
 let sub = [];
 
 let output = [];
 let index = 0;
 let arry = [];
 for(let i =1;i<=N;i++){
     arry.push(i);
 }
 
 check(sub,arry,output,index);
  //console.log(sub);
    for(let i =0;i<sub.length;i++){
        let a = sub[i];
       let b =  checkPow(a,p);
       //console.log(b);
       if(b===n){
           count++;
       }
    }
    console.log(count);
}

if(process.env.USER === 'rajatrana'){
 runProgram(``)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
 read += input;
});
process.stdin.on("end", function () {
 read = read.replace(/\n$/,"")
runProgram(read);
});

process.on("SIGINT", function () {
 read = read.replace(/\n$/,"")
 runProgram(read);
 process.exit(0);
});
