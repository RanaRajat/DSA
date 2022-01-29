//implement queues using stacks


function runProgram(input){

 
   let s1 = input.split(" ").map(Number);

   console.log(s1);

   let s2 = [];

   if(s1.length!==0){
       
     while(s1.length!==0){
        let peek =  s1.pop();
        s2.push(peek);
       

     }
     
     console.log(s2);

   }

   else{
      console.log("stack is empty");
   }

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 3 4 5`)
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

