function check(arr,st){
    
    for(let i =0;i<arr.length;i++){
        if(arr[i]=="{"||arr[i]=="["||arr[i]=="("){
            st.push(arr[i]);
        }
        else{
            if(st.length===0){
                return false;
            }
            if((arr[i]==="}"&&st[st.length-1]==="{")||(arr[i]==="]"&&st[st.length-1]==="[")||(arr[i]===")"&&st[st.length-1]==="(")){
                st.pop();
            }
            
        }
    }
    return true;
}

function runProgram(input){

   let arr = input.split("");
   let st = [];
   let a = check(arr,st);
   console.log(a);

   

  

}

if(process.env.USER === 'rajatrana'){
 runProgram(`{[()]}))`)
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

