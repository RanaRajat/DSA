//step 1
let low = 0;
high = 1;
while(key>arr[high]){
    low = high;
    high = high*2;
}


function runProgram(input){

   

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 1 1 1 2 2 2 `)
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

