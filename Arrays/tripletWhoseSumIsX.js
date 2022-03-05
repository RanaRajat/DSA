function check(arr,sum){
  let arry = [];
    for(let i =0;i<arr.length;i++){
        let x = arr[i];
        let lo = i+1;
        let hi = arr.length-1;

        while(lo<hi){
          if(x+arr[lo]+arr[hi]===sum){
                arry.push(x);
                arry.push(arr[lo]);
                arry.push(arr[hi]);
                return arry;
          }
          else if(x+arr[lo]+arr[hi]<sum){
              lo++;
          }
          else if(x+arr[lo]+arr[hi]>sum){
              hi--;
          }
        }
    }
  return -1;
}

function runProgram(input){

    let arr = input.split(" ").map(Number);
    let sum = 24;
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            for(let k = j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]===sum){
                   console.log(arr[i],arr[j],arr[k]);
                }
            }
        }
    }
   

    // in o(n^2)
    arr = arr.sort();
   let res = check(arr,sum);
   console.log(res);

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`12 3 4 1 6 9`)
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
