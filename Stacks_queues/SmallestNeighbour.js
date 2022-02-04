function runProgram(input){

    let arr = input.split("\n");
    
    let n = Number(arr[0]);
    
    arr = arr.slice(1);
    
    arr = arr[0].split(" ").map(Number);
    
    let st = [];
    let arry = [];
    for(let i =0;i<n;i++){
        while(st.length!==0&&st[st.length-1]>=arr[i]){
            st.pop();
        }
        if(st.length===0){
            st.push(arr[i]);
            arry[i]=-1;
        }
        else{
            arry[i]=st[st.length-1];
            st.push(arr[i]);
            
        }
        
        
        
    }
   console.log(arry.join(" ")); 
   
 
   
 
 }
 
 if(process.env.USER === 'rajatrana'){
  runProgram(``)
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
 
 