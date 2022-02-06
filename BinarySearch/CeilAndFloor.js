//ceil and floor value


function check(arr,ceil,floor,low,high,target){

    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);

        if(arr[mid]===target){
            ceil = mid;
            floor = mid;
            let arry = [];
            arry.push(ceil);
            arry.push(floor);
            return arry;
        }
        if(target>arr[mid]){
            floor = mid;
            low = mid+1;
        }
        else{
            ceil = mid;
            high = mid-1;
        }
    }
    console.log(ceil,floor);
}

function runProgram(input){

   let arr = input.split("\n");

   let target = Number(arr[1]);

   arr = arr[0].split(" ").map(Number);
   

   let ceil = -1;
   let floor= -1;

   let low = 0;
   let high = arr.length-1;
   check(arr,ceil,floor,low,high,target);

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 3 3 3 3 5 5 5
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

