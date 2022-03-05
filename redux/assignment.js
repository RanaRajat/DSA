

// // // const action = {type:"INC",Payload:1};

// // // class Store{
// // //     constructor(reducer,init){
// // //         this.reducer = reducer;
// // //         this.state = init;
// // //     }
// // //     get(){
// // //         console.log(this.state);
// // //     }
// // //     dispatch(action){
// // //         this.state = this.reducer(this.state,action);

// // //     }
// // // }

// // // const reducer = (state,action)=>{

// // //     if(action.type ==="INC"){
// // //         return {...state,count:state.count+action.Payload}
// // //     }
// // // return state;
// // // }

// // // const init = {count:1};

// // // const store = new Store(reducer,init);
// // // store.dispatch(action);
// // // store.dispatch(action);

// // // store.get();
// const action = {type:"INC",payload:1};

// class Store{
//     constructor(reducer,init){
//         this.reducer = reducer
//         this.state = init
//     }
    
//     getState(){
//         console.log(this.state);
//     }
//     dispatch(action){
//         this.state = this.reducer(this.state,action);
//     }
// }

// const init = {count:0};

// const reducer = (state,action)=>{

//     if(action.type ==="INC"){
//                 return {...state,count:state.count+action.payload}
//             }
//         return state;
       
// }

// const store = new Store(reducer,init);
// store.dispatch(action);
// store.getState();











// // function fun(){
// //     let max=10;

// //     return max?"true":"false";
// // }
// // console.log(fun());


// // const action = {type:"INC",payload:1};

// // class Store{
// //     constructor(reducer,init){
// //         this.reducer = reducer;
// //         this.state = init;
// //     }

// //     getState(){
// //         console.log(this.state);
// //     }
// //     dispatch(action){
// //         this.state = this.reducer(this.state,action);
// //     }
// // }

// // const reducer = (state,action)=>{
// //     if(action.type==="INC"){
// //         return({...state,count:state.count+action.payload});
// //     }
// //     return state;
// // }

// // const init = {count:0};

// // const store = new Store(reducer,init);

// // store.dispatch(action);
// // store.getState();



// // const modules = {
// //     x: 42,
// //     name:"Rajat",
// //     getX() {
// //         console.log(this.name);
// //       return this.x;
// //     }
// //   };
  
// //   const unboundGetX = modules.getX;

// //  // console.log(unboundGetX()); // The function gets invoked at the global scope
// //   // expected output: undefined
  
// //   const boundGetX = unboundGetX.bind(modules);
// //   console.log(boundGetX());
// //   //expected output: 42

// //   function calls(){
// //       console.log("hello");
// //   }

 

// let myPromise = new Promise(function(resolve, reject){
//     //do something
//            //resolve(`success`);
//            let error=true;
//            if(!error){
//             reject(`error`);
//            }
//            else{
//                resolve();
//            }
// });
// myPromise.then(function(){
//     console.log("resolved bhai");
// }).catch(function(){
//     console.log("not resolved bhai");
// });


// async function test(){
//     let myPromise = new Promise(function(resolve, reject){
//         //do something
//                //resolve(`success`);
//                let error=true;
//                if(!error){
//                 reject(`error`);
//                }
//                else{
//                    resolve('done');
//                }
//     });

//     let res = await myPromise;
//     console.log(res);
// }
// test();


// //map

// let arr = [1,2,3,4,5];

// arr.map((e)=>{
// return (e*2);
// });
// console.log(arr);
//  arr.forEach((e)=>{
//     return e;
// })


// //reduce

// let b = arr.reduce((acc,curr)=>{
//       acc= curr+acc;
//       return acc;
// },0);

// console.log(b);

// //filter

// let c = arr.filter((e)=>{
//     return (e%2===0);
// })
// console.log(c)

// // let arr = [1,2,3,4,5];

// // // arr.map((e)=>{
// // // return (e*2);
// // // });
// // // console.log(arr);
// // //  arr.forEach((e)=>{
// // //     return e*2;
// // // })
// // // console.log(arr);


// // // let arr = [1, 2, 3, 4, 5];

// // // let arr1 = arr.map((e) => {
// // //   return e * 2;
// // // });
// // // let arr2 = [];
// // // arr.forEach((e) => {
// // //     arr2.push(e * 2);
// // //   });

// // // console.log(typeof(undefined));

// // // console.log(null == undefined);
// // // console.log(null === undefined);

// // // function a() {
// // //     for (var i = 0; i < 3; i++) {
// // //         function v(i){
// // //       setTimeout(()=>{
// // //           console.log(i);
// // //       },i*1000);
// // //     }
// // //     v(i);
// // //   }
// // // }
  
// // // let promise = new Promise((resolve,reject)=>{
          
// // //       let ar;

// // //       if(!ar){
// // //           reject('reject');
// // //       }
// // //       else{
// // //           resolve('resolve');
// // //       }
// // // });

// // // promise.then(function(){

// // //     console.log("resolved");
// // // }).catch(function(e){
// // //     console.log(e);
// // // })

// // // async function test(){
// // //     let myPromise = new Promise(function(resolve, reject){
// // //         //do something
// // //                //resolve(`success`);
// // //                let error=true;
// // //                if(!error){
// // //                 reject(`error`);
// // //                }
// // //                else{
// // //                    resolve('done');
// // //                }
// // //     });

// // //     let res = await myPromise;
// // // //     console.log(res);
// // // // }
// // // // test();

// // async function test(){
// //     let myPromise = new Promise(function(resolve, reject){
// //         //do something
// //                //resolve(`success`);
// //                let error=false;
// //                if(!error){
// //                 reject(`error`);
// //                }
// //                else{
// //                    resolve('done');
// //                }
// //     });


// //     try{
// //     let res = await myPromise;
// //     console.log(res);}
// //     catch(e){
// //         console.log(e);
// //     }
// // }
// // test();



    
// // // let arr = [1,2,3,3,3,3,4];
// // // let obj = {};
// // // for(let i =0;i<arr.length;i++){
// // //     if(obj[arr[i]]){
// // //         obj[arr[i]]++;
// // //     }
// // //     else{
// // //         obj[arr[i]]=1;
// // //     }
// // // }
 
// // // let obje = {
// // //     name:"raha",
// // //     get(){
// // //         console.log(this.name);
// // //     }
// // // }
// // // let abs = obje.get;
// // // let b = abs.bind(obje);

// // // var objectB = Object.create(obje);
// // // console.log(obje.hasOwnProperty());
// // // console.log(objectB.get());
// // // b();

// // // console.log(obj);





// function A(){
//   var data = getData();
//  data[0].name= "Anup";
// }

// console.log("Working");

// async function Solve() {
//     let res =fetch("https://fakestoreapi.com/products/1")
//     let data =  await res.json() 
//     console.log(data);
// }


let obj1 = {
    name:"Dhruv"
}
let obj2 = Object.create(obj1);

console.log(Object.getPrototypeOf(obj2));


(function bg(){
    console.log("hello");

})();



// let promise1 = new Promise((resolve, reject) => {
//   let a = true;
//   if (a) {
//     resolve("resolved");
//   } else {
//     reject("Not working");
//   }
// });
// let promise2 = new Promise((resolve, reject) => {
//     let a = false;
//     if (a) {
//       resolve("resolved");
//     } else {
//       reject("Not working");
//     }
//   });
//   let promise3 = new Promise((resolve, reject) => {
//     let a = true;
//     if (a) {
//       resolve("resolved");
//     } else {
//       reject("Not working");
//     }
//   });

// Promise.all([promise1, promise2, promise3])
// .then((result) =>console.log(result))
// .catch(error => console.log(`Error in promises ${error}`))

// let obj =   {
//     name:"drfd"
// }



// let a = obj.hasOwnProperty("name");
// console.log(a)


// let av={}

// av[] = 123;

// console.log(av)

const a = {};

const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;




let arr = [1,2,3];
let obj = {};
obj[{ key: 'b' }] = "jhg";
for(let i =0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}



console.log(obj);
