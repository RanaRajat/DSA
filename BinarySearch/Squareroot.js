//binary search square root

function check(low,mid,high,a){
    while(low<=high){
         mid = Math.floor(low+(high-low)/2);
        
        if(mid*mid===a){
            return mid;
        }
        else if(mid*mid>a){
              high = mid;
        }
        else{
              low = mid;
        }
    }
    return "not found";
 
}
function runProgram(input){

   let a = Number(input);

   let low = 1;
   let high = a;
   let mid = Math.floor(low+(high-low)/2);
   let ab =check(low,mid,high,a);
   console.log(ab);
}

if(process.env.USER === 'rajatrana'){
 runProgram(`144`)
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

