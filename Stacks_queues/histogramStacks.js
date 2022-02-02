//histogram using stack

function runProgram(input){

   let arr = input.split(" ").map(Number);
     let max = 0;
    let st =[];
    let leftArray = [];
    let rightArray = [];
    for(let i =0;i<arr.length;i++){
        while(st.length!==0&&arr[st[st.length-1]]>=arr[i]){
            st.pop();
        }
        if(st.length===0){
            leftArray.push(0);
        }
        else{
            leftArray.push(st[st.length-1]+1);
        }
        st.push(i);
    }
    
     
    st.splice(0,st.length);
    
    for(let i =arr.length-1;i>=0;i--){
        while(st.length!==0&&arr[st[st.length-1]]>=arr[i]){
            st.pop();
        }
        if(st.length===0){
            rightArray[i]=arr.length-1;
        }
        else{
            rightArray[i] = st[st.length-1]-1;
        }
        st.push(i);
    }


    for(let i =0;i<arr.length;i++){
      if((rightArray[i]- leftArray[i]+1)*arr[i]>max){
          max = (rightArray[i]- leftArray[i]+1)*arr[i];
      }
    }
    console.log(max);
}

if(process.env.USER === 'rajatrana'){
 runProgram(`2 1 5 6 2 3 1`)
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

