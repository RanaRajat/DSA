function insert(x,st){
    if(st.length===0){
        st.push(x);
    }
    else{
        let a = st[st.length-1];
        st.pop();
        insert(x,st);
        st.push(a);

    }
}

function reverse(st){
    

   if(st.size>0){
       let x = st[st.length-1];
       st.pop();
       reverse(st);
       insert(x,st);

   }



}

function runProgram(input){

   let st = input.split(" ").map(Number);

    
   reverse(st);

  console.log(st);

}

if(process.env.USER === 'rajatrana'){
 runProgram(`1 2 3 4 5 6`)
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

