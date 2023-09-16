class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null; // Queue is empty
      }
      return this.queue.shift();
    }
  
    peek() {
      return this.isEmpty() ? null : this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log(myQueue.dequeue()); // Output: 1
  console.log(myQueue.peek());    // Output: 2
  console.log(myQueue.size());    // Output: 2
  




function toggleMobileMenu(menu) {
    console.log("rnnvfvn");
    //const offcanvasMenu = document.querySelector('.box1');
    //if(offcanvasMenu.style.marginTop === '0px')
    //    offcanvasMenu.style.marginTop ='300';
    //else{
    //    offcanvasMenu.style.marginTop ='0px';
    //}
menu.classList.toggle('open');
    
}

let selectedBox = null; // To keep track of the selected box
        const boxes = document.querySelectorAll(".box2");
        let clickIndex = 0; // To keep track of the click order
        const q1 = new Queue();
        // JavaScript function to change box color
        function ram(element) {
            clickIndex++;
q1.enqueue(element.id);
console.log(q1.peek());

         
                // if (selectedBox !== null) {
                //     selectedBox.style.backgroundColor = "#3498db"; // Restore previous box color
                // }
                element.style.backgroundColor ="#7A0000";// Change the color of the clicked box
                selectedBox = element; // Update the selected box
            
        }
        function ram2(e){
            const boxes = document.querySelectorAll(".box2");
            boxes.forEach(box => {
                box.style.backgroundColor = "#00407A";// Restore original color
            });
            console.log(e.id)

        }
        function test(){
           // while(q1.size()!=0){
                console.log("jdbfhdbfhb");
                
                const z=document.getElementById(q1.peek());
                z.style.backgroundColor="#00407A";
                q1.dequeue();
if(q1.size()==0)
clearTimeout(intervalId);
           // }
        }
        function ram3(){
            let i=0;



            const intervalId = setInterval(  function (){
                // while(q1.size()!=0){
                     console.log("jdbfhdbfhb");
                     
                     const z=document.getElementById(q1.peek());
                     z.style.backgroundColor="#00407A";
                     q1.dequeue();
     if(q1.size()==0)
     clearTimeout(intervalId);
                // }
             }, 500);


           
        }