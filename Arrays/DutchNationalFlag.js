function swap(lo,mid,arr){
    let temp = 0;

    temp = arr[lo];
    arr[lo]= arr[mid];
    arr[mid] = temp;
}

function runProgram(input){

   let arr = input.split(" ").map(Number);
   let mid = 0;
   let lo = 0;
   let hi = arr.length-1;
   for(let i =0;i<arr.length;i++){
       

       if(arr[mid]===0){
           swap(lo,mid,arr);
           mid++;
           lo++;
       }
       else if(arr[mid]===1){
           mid++;
       }
       else{
           swap(mid,hi,arr);
           hi--
       }


   }

  console.log(arr);

}

if(process.env.USER === 'rajatrana'){
 runProgram(`0 0 1 2 0 1 0 1 0 2 0`)
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
