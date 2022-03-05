function runProgram(input){

   
let arr = input.split(" ").map(Number);

let lo = 0;
let hi = arr.length-1;

while(lo<hi){

    if(arr[lo]%2===0&&lo<hi){
        lo++;
    }
    if(arr[hi]%2===1&&lo<hi){
        hi--;
    }

    if(lo<hi){
        let temp = 0;
        temp = arr[lo];
        arr[lo] = arr[hi];
        arr[hi] = temp;
    }

}
 console.log(arr); 

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 4 5 6 7 8 9 0`)
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
