//histogram using brute force approach

function runProgram(input){

   
  let arr = input.split(" ").map(Number);


  let max = 0;

  for(let i=0;i<arr.length;i++){
      let leftsmaller = 0;
      let rigthsmaller = 0;
      if(i===0){
          leftsmaller = 0;
      }
      else{
    for(let j=i-1;j>=0;j--){
        if(arr[j]<arr[i]){
            leftsmaller = j+1;
            break;
        }
       
    }}
   if(i===arr.length-1){
       rigthsmaller= arr.length-1;
   }
   else{
    for(let k = i+1;k<arr.length;k++){
      
        if(arr[k]<arr[i]){
            rigthsmaller = k-1;
            break;
        }
        else{
            rigthsmaller = arr.length-1;
        }
    }}
   //console.log(arr[i],leftsmaller,rigthsmaller);
  let area = (rigthsmaller-leftsmaller+1)*arr[i];
  
  if(area>max){
      max = area;
  }

  }

  console.log(max);
}
if(process.env.USER === 'rajatrana'){
 runProgram(`2 1 5 6 2 3 1`)
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

