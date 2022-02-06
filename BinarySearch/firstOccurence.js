//first occurence of target

function check(arr,target,low,high,res){

   while(low<=high){
   let mid = Math.floor(low+(high-low)/2);

   if(arr[mid]===target){
     res = mid;
     high = mid-1;
   }
   else if(arr[mid]<target){

      low = mid+1;
   }
   else{
      high = mid-1;
   }

}
return res
}

function runProgram(input){

   let arr = input.split("\n");

   

   let target = Number(arr[1]);

  let res = -1;
   arr = arr[0].split(" ").map(Number);
   let low = 0;
   let high = arr.length-1;

   let a = check(arr,target,low,high,res);
    console.log(a);

   

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 2 3 3 3 3 4 4 4 5 5 6 7 8
 5`)
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

