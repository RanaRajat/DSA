function checkLeft(arr,target,low,high,res){


    while(low<=high){
        
        let mid = Math.floor(low+(high-low)/2);

        if(arr[mid]===target){
            res = mid;
            high = mid-1;
        }
        else if(target>arr[mid]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
return res;
}

function checkRight(arr,target,low,high,res){


    while(low<=high){

        let mid = Math.floor(low+(high-low)/2);

        if(arr[mid]===target){
            res = mid;
            low = mid+1;
        }
        else if(target>arr[mid]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return res;

}

function runProgram(input){

   let arr = input.split("\n");

   let target = Number(arr[1]);

   arr = arr[0].split(" ").map(Number);

   let res = -1;

   let low = 0;
   let high = arr.length-1;
   let a = checkLeft(arr,target,low,high,res);
   let b = checkRight(arr,target,low,high,res);

   if(a===-1&&b===-1){
       console.log("not found");
   }
   else{
       console.log((b-a)+1);
   }
  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 1 1 1 2 2 2 2 2 4 4 4 5 5 5 5 6
 4`)
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

