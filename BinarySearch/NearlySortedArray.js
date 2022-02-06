//array is nearly sorted and difference can be of one plus or one minus

function check(arr,target,low,high){
   
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(low<=mid&&arr[mid-1]===target){
            return mid-1;
        }
        else if(high>=mid&&arr[mid+1]===target){
            return mid+1;
        }
        else if(target>arr[mid]){
            low = mid+2;
        }
        else{
            high= mid-2;
        }
    }
return -1;
}
function runProgram(input){

   let arr = input.split("\n");

   let target = Number(arr[1]);

   arr = arr[0].split(" ").map(Number);

   //console.log(arr);
   
   let low = 0;
   let high = arr.length-1;
  let a = check(arr,target,low,high);
  console.log(a);

}

if(process.env.USER === 'rajatrana'){
 runProgram(`5 10 30 20 40
 30`)
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

