function runProgram(input){

   
let arr = input.split(" ").map(Number);

let maj = 0;
let count = 1;

for(let i =1;i<arr.length;i++){
    if(arr[maj]===arr[i]){
        count++;
    }
    else{
       count--;
    }
    if(count===0){
        maj = i;
        count=1;
    }

}
console.log(arr[maj]);
  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 1 1 3 3 3 3 3 4 4 4 4`)
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
