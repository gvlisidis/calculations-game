// if we click on start/reset 
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
            //timeleft?
                //yes ->continue
                //no -> gameover
            //change button to reset
            //generate new Q&A



//if we click on answer box
    //if we are plauing
        //correct?
            //yes 
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //sjow try again box for 1 sec

function setAnswer(){
    
    var rannum1 = document.getElementById("num1").innerHTML = Math.floor((Math.random() * 10) + 1);
        var rannum2 = document.getElementById("num2").innerHTML = Math.floor((Math.random() * 10) + 1);
        var multiply = rannum1 * rannum2;
        var box1;
        var box2;
        var box3;
        var box4;
    
     var choice = Math.floor((Math.random() * 4) + 1);
                if(choice == 1){
                    box1 = document.getElementById("box1").innerHTML = multiply;
                    box2 = document.getElementById("box2").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box3 = document.getElementById("box3").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box4 = document.getElementById("box4").innerHTML =Math.floor((Math.random() * 100) + 1);
                    
                }
                else if(choice == 2){
                    box1 = document.getElementById("box1").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box2 = document.getElementById("box2").innerHTML = multiply;
                    box3 = document.getElementById("box3").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box4 = document.getElementById("box4").innerHTML =Math.floor((Math.random() * 100) + 1);
                }
                 else if(choice == 3){
                    box1 = document.getElementById("box1").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box2 = document.getElementById("box2").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box3 = document.getElementById("box3").innerHTML = multiply;
                    box4 = document.getElementById("box4").innerHTML =Math.floor((Math.random() * 100) + 1);
                }
                else if(choice == 4){
                    box1 = document.getElementById("box1").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box2 = document.getElementById("box2").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box3 = document.getElementById("box3").innerHTML =Math.floor((Math.random() * 100) + 1);
                    box4 = document.getElementById("box4").innerHTML = multiply;
                }
    
}


function playerChoice(){
    
}


    var startreset = document.getElementById("startreset");
    //helps the counter to count down 
    var x=60;
    startreset.onclick=startGame;
    var check = true;

//this function starts the game
function startGame(){
    
        
    
    if(check){
        setAnswer();
        check=false;
        // variable that sets the total score
        var score = document.getElementById("scorevalue").innerHTML=0;
    
    
   
        //sets the time remaining attribute to visible
        var timeremaining = document.getElementById("timeremaining").style.display = "inline"; 
    
    
        // counter starts from x =60secs
        var counter = document.getElementById("timeremainingvalue");
        
        //these variables set the numbers that will multiply
       
        
    
        // counter reduce his value by 1 every second
        var countdown = setInterval(function()  {  if(x!=0){ x--; counter.innerHTML = x}}, 1000);
    
        
       
       
        
        
        
        
    
        
    }
    
    
}







