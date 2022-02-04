// Signal's Capacity Ended
// Description

// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.


// Input
// Input Format

// Each test case has multiple test cases in it:

// First line contains an integer specifying the number of test cases.

// Second line contains an integer n specifying the number of towers.

// Third line contains n space separated integers(H[i]) denoting the height of each tower.

// Constraints

// 1 <= T <= 10

// 2 <= n <= 10^6

// 1 <= H[i] <= 10^8




// Output
// Output Format

// Print the range of each tower (separated by a space).


// Sample Input 1 

// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
// Sample Output 1

// 1 1 1 2 1 4 6
// 1 2 1 4 1
// Hint

function check(arry){
    let st = [];
    let h = arry[1].split(" ").map(Number);
    let n = Number(arry[0]);
    st.push(0);
    let narray=[];
    
    for(let i =0;i<n;i++){
        //console.log(h[st[st.length-1]]);
        while(st.length!==0&&h[st[st.length-1]]<= h[i]){
            st.pop();
        }
        if(st.length===0){
            narray.push(i+1);
        }
        else{
            narray.push(i-st[st.length-1]);
        }
        
        st.push(i);
        
    }
    console.log(narray.join(" "));
}

function runProgram(input){

   
let arr = input.split("\n");

let n = Number(arr[0]);

arr = arr.slice(1);

for(let i =0;i<n;i++){
    let arry = [];
    arry = arr.splice(0,2);
    check(arry);
}
  

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

