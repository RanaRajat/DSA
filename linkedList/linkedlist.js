// const n1 = {
//     data:10
// }
// const n2 = {
//     data:20
// }

// n1.next = n2;
// console.log(n1);


class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

//const n1 = new Node(100);

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert first node

  insertFirst(data){
    this.head = new Node(data,this.head);
    this.size++;
 }


 //print list 

 printList(){
     let current = this.head;

     while(current){
        console.log(current.data); 
        current = current.next;

     }
 }
 //insert last

  insertLast(data){
let current;
    if(!this.head){
        this.head = new Node(data);
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;

        }
        current.next = new Node(data);
    }
    this.size++; 
  }

  insertAt(index,data){
      if(index>this.size||index<0){
          return;
      }
      else if (index===0){
          this.head = new Node(data,this.data);
          this.size++;
      }
      else{
          let current = this.head;
          let prev;

          let count = 0;

          while(count<index){
              prev = current;
              count++;
              current = current.next;
          }
          let node = new Node(data);
          node.next = current;
          prev.next = node;

        this.size++;
      }
  }

  //get at

  getAt(index){
      let current = this.head;

      let count = 0;

      while(current){
         if(count===index){
             console.log(current.data);
         }
         count++;
         current = current.next;
  
        }
        return null;
  }

  //remove at

  removeAt(index){
    let current = this.head;
      let count = 0;
      let prev = current;  
    if(index<0||index>this.size){
          return;
      }
      
      else if(index ===0){
          this.head = current.next;
          this.size--;
      }
      else{
          while(count<index){
              prev = current;
              count++;
              current = current.next;
          }
          prev.next = current.next;
          this.size--;
      }
  }
//clear list

clearList(){
    this.head = null;
    this.size=0;
}
}

const ll = new linkedList();
ll.insertFirst(100);
// ll.insertFirst(400);

ll.insertLast(500);
ll.insertAt(1,1000);
ll.clearList();
ll.printList();
ll.getAt(0);
ll.removeAt(1);

console.log(ll);