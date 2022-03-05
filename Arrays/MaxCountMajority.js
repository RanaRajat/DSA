function merge(arr,lo,mid,hi){
    let arr1 = [];
    let arr2 = [];

    for(let i =lo;i<=mid;i++){
        arr1.push(arr[i]);
    }
    for(let i =mid+1;i<=hi;i++){
        arr2.push(arr[i]);
    }
   let i =0;
   let j =0;
   let k = lo;

   while(i<arr1.length&&j<arr2.length){
       if(arr1[i]<arr2[j]){
           arr[k] = arr1[i];
           i++;
       }
       else{
           arr[k]=arr2[j];
           j++;
       }
       k++;
   }

   while(i<arr1.length){
       arr[k]= arr1[i];
       k++;
       i++;
   }
   while(j<arr2.length){
    arr[k]= arr2[j];
    k++;
    j++;
}
}

function mergeSort(arr,lo,hi){

    

    if(lo>=hi){
        return;
    }

    else{
        let mid = Math.floor(lo+(hi-lo)/2);
        
         
        mergeSort(arr,lo,mid);
       
        

        mergeSort(arr,mid+1,hi);
     

        merge(arr,lo,mid,hi);



    }

}
function runProgram(input){

   let arr = input.split(" ").map(Number);


let lo = 0;
let hi = arr.length-1;

mergeSort(arr,lo,hi);
console.log(arr);
let n = Math.floor(arr.length/2);
let maj = 0;
 for(let i =0;i<=n;i++){
    
    if(arr[i]===arr[i+n]){
          maj = arr[i];
    }
  
 }

 console.log(maj);

 let obj = {};

 obj[undefined] = "rajat";
 console.log(obj);


}

if(process.env.USER === 'rajatrana'){
 runProgram(`3 3 4 2 4 4 2 4 4`)
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
