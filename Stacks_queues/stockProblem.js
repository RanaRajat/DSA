//stocks problem in js

function stack(st){
   let stackP = [];

   stackP.push(0);

   let span = [];
   span[0] = 1;
   for(let i =1;i<st.length;i++){

   while(stackP.length!==0&&st[stackP[stackP.length-1]]<st[i]){


    stackP.pop();

   }
   if(stackP.length===0){
    span[i] = i+1;
   }
   else{
    span[i] = i-stackP[stackP.length-1];
   }
   
   stackP.push(i);


   }

   return span;
   
}


function runProgram(input){

   let arr = input.split(" ").map(Number);

  console.log(arr);

  let a = stack(arr);
  console.log(a);

}

if(process.env.USER === 'rajatrana'){
 runProgram(`100 80 60 70 60 75 85`)
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

