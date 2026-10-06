//console.log( "hello to javascript");
/*let marks = prompt("enter marks ");
  if ( marks >= 90 && marks<=100){
    console.log("grade A  sabash ")
  }
 else if ( marks >=80 && marks<90){
    console.log( " grade B")

 }
 else if (marks >=70 && marks <80 ){
    console.log(" Grade C ")
 }
 else if (marks >=35){
    console.log (" grade D ")
 }
 else{
    console.log("fail , nalayak ")
 }
    */
/*et count=0;
for(let i =1 ; i<=100; i++)
{ 
  if(i%2===0  ){ 
      console.log( i," is even ")
      count++;
  }  
} 
console.log(count);
*/
/*prompt("welcome to guessing game ");
let gamenum = 20;
let num = prompt( "guess my age ");
 
while( num != gamenum){
    num=prompt(" try again ")
}
 console.log(" congratulations you guessed right "); */


/* let name= prompt(" enter full name ")
 let l =  name.length; 
 
 let username = "@" +name+l ;
 console.log("username is " + username);
*/


/*  let marks = [85,97,44,37,76,60];
  let sum =0;
  let len = marks.length;
  for (let val of marks){
    sum +=val;
  }
  let average = sum / len;
  console.log(`average marks is ${average} `)
  */



/*
let arr = [250, 645, 300, 900, 50];
for (let val of arr) {

   let offer = val / 10;
   val -= offer;
   console.log(val);
}
*/


/*
let arr = ["Bloomberg"," Microsift"," Uber ","Google","IBM" ,"Netflix"]
arr.push("amazon");
*/



/* const countvowels =  (str) => {
   let count = 0;
   for (let char of str) {
      if (char ==="a"  || char === "e" || char === "i" || char === "o" || char === "u"){
         count++;
      console.log(char);
   }
} console.log(count);
}

 */


/*
let n = prompt("enter a number :");
let arr =[];
for(let i = 1 ; i<=n;i++){
   arr[i-1]=i;

}
  console.log(arr);
   
 let actori= arr.reduce  ((previous, current )=>{
   return previous * current ;
    })
  
    console.log(sumarr);
    */


// DOM //

/* let h2 =  document.querySelector("h2");

   
    console.dir(h2.innerText + " from Muskan ");
    */


/*
let div = document.querySelectorAll(".box");
 div[0].innerText = " new unique value ";
div[1].innerText = " new unique value ";
div[2].innerText = " new unique value ";
*/

/*let div =  document.querySelector ("div");
  console.log(div);
  let id = div.getAttribute("id");
  console.log(id);*/

/*
 let div = document.querySelector("div") ;
 console.log(div.setAttribute("id" ,"two")) 
 */

/*let div =document.querySelector("div");
 div.style.backgroundColor =(" black ");
 div.style.color = ("white ");
 */

/*
   let h2  = document.createElement("h2");
   h2.innerText = " I AM HEADING ";
   let div =   document.querySelector("div");
   div.after (h2);
 
     
h2.remove();
*/

/*
let btn = document.createElement("button");
btn.innerText = "clickme!";
btn.style.color = ("white");
btn.style.backgroundColor = ("red");
 
  
 let body = document.querySelector("body");
body.prepend  (btn);
*/

/*
let   parah = document.querySelector( ".content");
parah.classList.add("newclass");
*/

/*
 let btnmode = document.querySelector("button");
 let mode = "light"
   
      
 btnmode.addEventListener("click" , ()=>{
   if (mode === "light"){
      mode = "dark";
document.querySelector ("body").style.backgroundColor ="grey";


   }
   else{
      mode = "light";
      document.querySelector("body").style.backgroundColor="white";      
   }
 })*/


// first game 

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
 let user_score = document.querySelector("#userscore")
 let comp_score = document.querySelector("#compscore")


const getcompchoice = () => {
   const option = ["stone", "Paper", "Scissors"];
   const index = Math.floor(Math.random() *3);
  // console.log(option[index]);
    return  option[index];
};
   
let msg = document.querySelector(".msg p");
  
 compscorescore = document.querySelector("#compscore")


 
   const drawgame = () => {
   console.log("game was draw");
    msg.innerText=("game was draw");
    msg.style.backgroundColor = "#080b31"
};
  
 
const showwin = (userwin , compchoice ,userchoice) => {
   if (userwin) {
      console.log("you win !")
      userscore++;
      user_score.innerText =  userscore ;
      msg.innerText = `you win !   your ${userchoice}  beats ${ compchoice}`;
      msg.style.backgroundColor = " green"  
      }
   else {
      console.log("you lose !")
      compscore++;
      comp_score.innerText = compscore;
      msg.innerText = `you lose !  your ${ compchoice}  beats ${userchoice}`
      msg.style.backgroundColor = "red"
   }
}


const playgame = (userchoice ,  ) => {
   //console.log("userchoice is ", userchoice);
   const compchoice =  getcompchoice();
   console.log("compchoice is " , compchoice);


   if (userchoice === compchoice) {
      drawgame();
   }
   else {
      let userwin = true;
      if (userchoice === "stone") {
         // compchoice = sessior / paper
         userwin = compchoice === "Paper"? false : true;
      }


      else if (userchoice === "Paper") {
         userwin = compchoice === "Scissors" ? false : true

      } else {
         userwin = compchoice === "stone" ? false : true }
       
      
         showwin(userwin  , compchoice , userchoice);      
    }   
   };

      
 


 
 choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const  userchoice = choice.getAttribute("id")
      console.log("userchoice is ", userchoice);
      playgame(userchoice);
       
   })
});


