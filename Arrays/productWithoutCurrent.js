function runProgram(input){

   let arr = input.split(" ").map(Number);

  let leftA = [];
  leftA[0] = 1;
  for(let i =0;i<arr.length;i++){
      if(i!==0){
      leftA[i] = leftA[i-1]*arr[i-1];
    }
  }
  let temp =1;
  for(let i =arr.length-1;i>=0;i--){
        leftA[i] = leftA[i]*temp;
        temp = temp*arr[i];
  }

  console.log(leftA);

}

if(process.env.USER === 'rajatrana'){
 runProgram(`10 3 5 6 2`)
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
