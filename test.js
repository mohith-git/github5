var color=["red","green","grey","brown","tomato"];
var heading=document.getElementById("color-changer");

var order = 0;

function colorchanger(){

if(order>=color.length){

order=0;
}

heading.style.color =color[order];

order++;



};

setInterval(colorchanger,1000);



var button1 = document.getElementById("start");
var paper1 = document.getElementById("question1");
button1.onclick= function nxtpg(){

    paper1.style.zIndex=1;

}




var nxt1= document.getElementById("nxt1");
var paper2 = document.getElementById("question2");
nxt1.onclick = () =>{

paper2.style.zIndex=2;

}


var prev1 = document.getElementById("previous1");
var paper3 = document.getElementById("question2");
prev1.onclick = () =>{


paper3.style.zIndex= -1;

}





var nxt2= document.getElementById("nxt2");
var paper4 = document.getElementById("question3");
nxt2.onclick = () =>{

paper4.style.zIndex=3;

}


var prev2 = document.getElementById("previous2");
var paper5 = document.getElementById("question3");
prev2.onclick = () =>{


paper5.style.zIndex= -1;

}



var nxt3= document.getElementById("nxt3");
var paper6 = document.getElementById("question4");
nxt3.onclick = () =>{

paper6.style.zIndex=4;

}


var prev3 = document.getElementById("previous3");
var paper7 = document.getElementById("question4");
prev3.onclick = () =>{


paper7.style.zIndex= -1;

}

var nxt4= document.getElementById("nxt4");
var paper8 = document.getElementById("question5");
nxt4.onclick = () =>{

paper8.style.zIndex=5;

}

var prev4 = document.getElementById("previous4");
var paper9 = document.getElementById("question5");
prev4.onclick = () =>{


paper9.style.zIndex= -1;

}

var score =0;

var selection1 = document.getElementById("first");
var image = document.getElementById("image1");

selection1.onchange = () =>{

if(selection1.value!= "JEFF BEZOS"){

document.getElementById("result1").innerText="Your Answer is Wrong. " + "Answer is : " + "JEFF BEZOS";


} else{

    document.getElementById("result1").innerText="Your Answer is Correct."
    score++;

}



console.log(score);

image.style.transition="all 0.5s ease-in-out";
image.style.transform="rotate(360deg)";
image.style.filter= "blur(0px)";



}





var selection2= document.getElementById("second");
var image2 = document.getElementById("image2");

selection2.onchange = () =>{

if(selection2.value!= "TOYOTA"){

document.getElementById("result2").innerText="Your Answer is Wrong. " + "Answer is : " + "TOYOTA";


} else{

    document.getElementById("result2").innerText="Your Answer is Correct."
        
    score++;
}


console.log(score);


image2.style.transition="all 0.5s ease-in-out";
image2.style.transform="rotate(360deg)";
image2.style.filter= "blur(0px)";



}



var selection3= document.getElementById("third");
var image3 = document.getElementById("image3");

selection3.onchange = () =>{

if(selection3.value!= "CARBON"){

document.getElementById("result3").innerText="Your Answer is Wrong. " + "Answer is : " + "CARBON";


} else{

    document.getElementById("result3").innerText="Your Answer is Correct."

    score++;

}


console.log(score);


image3.style.transition="all 0.5s ease-in-out";
image3.style.transform="rotate(360deg)";
image3.style.filter= "blur(0px)";



}


var selection4= document.getElementById("fourth");
var image4 = document.getElementById("image4");

selection4.onchange = () =>{

if(selection4.value!= "SACHIN TENDULKAR"){

document.getElementById("result4").innerText="Your Answer is Wrong. " + "Answer is : " + "SACHIN TENDULKAR";


} else{

    document.getElementById("result4").innerText="Your Answer is Correct."
   
    score++;
     
}



console.log(score);

image4.style.transition="all 0.5s ease-in-out";
image4.style.transform="rotate(360deg)";
image4.style.filter= "blur(0px)";



}

var selection5= document.getElementById("fifth");
var image5 = document.getElementById("image5");

selection5.onchange = () =>{

if(selection5.value!= "EFFIEL TOWER"){

    document.getElementById("result5").innerText="Your Answer is Wrong. " + "Answer is : " + "EFFIEL TOWER";

} else{

    document.getElementById("result5").innerText="Your Answer is Correct."

    score++;
     
}


console.log(score);


image5.style.transition="all 0.5s ease-in-out";
image5.style.transform="rotate(360deg)";
image5.style.filter= "blur(0px)";



}


console.log(score);

var finish = document.getElementById("finish");
var scorecard = document.getElementById("scorecard");




console.log(score);

finish.onclick = () =>{


    scorecard.style.zIndex=6;

if(score ==4 || score ==5){

    
   
    scorecard.innerText="CONGRATS :) !! " + "YOUR SCORE IS  " + score ; 
    

} else{

    
    scorecard.innerText="BETTER LUCK NEXT TIME :( !! " +  "YOUR SCORE IS  " + score ;



}








}