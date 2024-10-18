
// simon says game

let gameseq = []; // stores game sequence
let userseq = []; // stores user sequence 


let started= false; //game has not started
let level = 0; // level is zero 

let p = document.querySelector("p") // accessing p 

let btns = ["red","green", "yellow","purple"];

let h5 = document.querySelector("h5");


// to start applying a event to a document
document.addEventListener("keypress", function(){
if(started == false){   
    console.log("game is started ");
    started = true;
    levelup();
}
})

function levelup(){
    userseq = []; // user have to all colors from start 
    level++;  // levels up 
    p.innerText = `Level${level}`; 

    // random btn choose 
    let randomidx = Math.floor(Math.random()*4); // chooses  a  random no. btw o to 3
  let randomcolor = btns[randomidx];// selects index and stores that color in randomcolor .
  let randombtn = document.querySelector(`.${randomcolor}`);// stores the class of that color to  randombtn variable.
gameseq.push(randomcolor);  // adding that color(class) to gameseq array 
console.log(gameseq);




//   console.log(randomidx);
//   console.log(randomcolor);
//   console.log(randombtn);


 gameflash(randombtn); // applys btnflash function on that class 
}
   




function gameflash(btn){

   btn.classList.add("gameflash"); // start flash
    setTimeout(function(){
    btn.classList.remove("gameflash")// remove flash 
    }
    ,250)// time duration for flash 
}

function userflash(btn){

    btn.classList.add("userflash"); // start flash
     setTimeout(function(){
     btn.classList.remove("userflash")// remove flash 
     }
     ,250)// time duration for flash 
 }


function btnpress(){  // when a user clicks an button 
    let btn = this;
    userflash(btn)

    let usercolor = btn.getAttribute("id"); // getting id 
    userseq.push(usercolor); // adding that id to user seq 
    console.log(userseq);
    checkans(userseq.length-1);// if the color that user presses is same the color that game showed first 
                                //then it will move to next color otherwise it will show gameover.


}

let allbtns = document.querySelectorAll(".box");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function checkans(idx){
    // console.log(` current level is ${level}`);

        //   let idx = level -1;  //fixed index 
          if(userseq[idx] === gameseq[idx] ){
      if(userseq.length == gameseq.length){
        // levelup();
        setTimeout(levelup , 1000);

      }

          }
      else{
      p.innerHTML =` Game Over! Your score was <b> ${level} </b> <br>  Please Enter any key to try again`
      h5.innerHTML = ` Your highest score is <b> ${level} <b>`;


          
      document.querySelector("body").style.backgroundColor = "red"; // it will show red bg-color to body when game is over
      setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";

     }, 150);
      reset(); // game will start from beginning 
      }

}


function reset() {

    started = false;
    level = 0;
    gameseq =[];
    userseq = [];
}