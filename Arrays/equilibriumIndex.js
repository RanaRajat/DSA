function runProgram(input){

   let arr = input.split(" ").map(Number);

   //brute force
let flag = 0;
   for(let i =0;i<arr.length;i++){
       let ls = 0;
       for(let j =i-1;j>=0;j--){
              ls = ls+arr[j];
       }
      let rs = 0;
       for(let j =i+1;j<arr.length;j++){
           rs = rs+arr[j];
       }
       if(rs===ls){
         console.log(i);
         flag = 1;
       }
   }

   if(flag ===0){
     console.log("Not found");
   }

  // second approach
let arr1 = [];
let arr2 = [];
arr1[0] = arr[0];
arr2[arr.length-1] = arr[arr.length-1];
  for(let i =1;i<arr.length;i++){
      
    arr1[i]=arr1[i-1]+arr[i];
    

     

  }

  for(let j = arr.length-2;j>=0;j--){
      arr2[j] = arr[j]+arr2[j+1];
  }
 //console.log("rifht", arr2);

  for(let i =0;i<arr.length;i++){
      if(arr1[i]===arr2[i]){
          console.log(i);
      }
  }


  //third approach

let sum = 0;

  for(let i =0;i<arr.length;i++){
     sum = sum+arr[i];
  }
  let leftS = 0;
  for(let i =0;i<arr.length;i++){
      if(i!==0){
      leftS = leftS+arr[i-1];
      }
   
     sum = sum-arr[i];
      if(sum===leftS){
          console.log(i);
      }
  }

}

if(process.env.USER === 'rajatrana'){
 runProgram(`7 1 5 2 -4 3 14`)
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
