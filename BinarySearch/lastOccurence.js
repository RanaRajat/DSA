//last occurence of element
function check(arr,low,high,target,res){

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

   let target = Number(arr[0]);

   arr = arr[1].split(" ").map(Number);

   let res = -1;

   let low = 0;

   let high = arr.length-1;

   let a = check(arr,low,high,target,res);

   console.log(a);

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1
1 1 1 1 2 2 2 2 3 3 3 4 4 4`)
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

