//water storage problem stacks

function runProgram(input){

   let arr = input.split(" ").map(Number);

  
  let leftArray = [];
  let rightArray = [];
  leftArray[0] = arr[0];
  rightArray[arr.length-1] = arr[arr.length-1];
  
   for(let i=1;i<arr.length;i++){
       leftArray[i] = Math.max(arr[i],leftArray[i-1]);
      
   }

   for(let i=arr.length-2;i>=0;i--){
      
    rightArray[i] = Math.max(arr[i],rightArray[i+1]);

}
 let res = 0;
  for(let i =0;i<arr.length;i++){
       res = res+Math.min(leftArray[i],rightArray[i])-arr[i];
       
  }

console.log(res);
}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 0 2 0 1 0 3 1 0 2`)
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

