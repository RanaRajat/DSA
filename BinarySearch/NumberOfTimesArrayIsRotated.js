function check(arr,low,high){
    while(low<=high){


        let mid = Math.floor(low+(high-low)/2);

        if(arr[mid]>arr[mid+1]){
            return arr.length-mid+1;
        }
        else if(arr[mid]<arr[mid-1]){
             return arr.length-mid;
        }
        else if(arr[mid]<arr[high]){
            high = mid-1;
        }
        else if(arr[mid]>arr[low]){
            low = mid+1;
        }
    }
    return -1;
}

function runProgram(input){

   let arr = input.split(" ").map(Number);

   //console.log(arr);

   let low = 0;

   let high = arr.length-1;

   let a = check(arr,low,high);

   console.log(a);

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`5 6 7 8 9 1 2 3 4`)
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

