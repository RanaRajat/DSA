function merge(arr,lo,mid,hi){


    let arr1 = [];
    let arr2 = [];

    for(let i=lo;i<=mid;i++){
        arr1.push(arr[i]);
    }
    for(let i = mid+1;i<=hi;i++){
        arr2.push(arr[i]);
    }

    let i =0;
    let j = 0;

    let k = lo;

    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr[k]= arr1[i];
            i++;
        }
        else{
            arr[k] = arr2[j];
            j++;
        }
        k++;

    }

    while(i<arr1.length){
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        arr[k] = arr2[j];
        k++;
        j++;
    }

}

function mergeSort(arr,lo,hi){

    if(lo<hi){
        let mid = Math.floor(lo+(hi-lo)/2);

        mergeSort(arr,lo,mid);
        mergeSort(arr,mid+1,hi);
        merge(arr,lo,mid,hi);
    }

}

function twoPointer(minSum,lo,hi,arr){
    while(lo<hi){
        let sum = arr[lo]+arr[hi];
  
        if(sum<minSum){
            minSum = sum;
        }
        if(sum<0){
            lo++;
        }
        else if(sum>0){
            hi--;
        }
        else if(sum===0){
            minSum = sum;
            return sum;
        }
    }
  return minSum;
}

function runProgram(input){

   let arr = input.split(" ").map(Number);

   let lo = 0;
   let hi = arr.length-1;
   mergeSort(arr,lo,hi);
let minSum = 99999999;
    

let res = twoPointer(minSum,lo,hi,arr);
console.log(res);
}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 6 9 -5 -8`)
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
