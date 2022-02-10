//majority element should be greater than half the number of elemenst in o(n)


function runProgram(input){

   let arr = input.split(" ").map(Number);


   let maj = Math.floor(arr.length/2);
   
   for(let i =0;i<arr.length;i++){
      if(arr[i]===arr[i+maj]){
    console.log(arr[i]);
    break;
    }
   }

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`3 3 3 3 3 4 4 4 4`)
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
