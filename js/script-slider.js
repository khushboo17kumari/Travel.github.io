// JavaScript Document

/* ......................book button code for displaying and hiding it..........................*/
var bookbutton = document.querySelectorAll(".btn-nav");
var bookContainer = document.querySelectorAll(".book-box");

function bookBox(){

console.log("jai mata di");
if(bookContainer[0].style.display==="block"){
	bookContainer[0].style.display="none";
	bookbutton[0].style.backgroundColor="";
}
else{
	bookContainer[0].style.display="block";
	bookbutton[0].style.backgroundColor="crimson";
	hotelBtn();
}
 
}
var package = document.querySelectorAll(".package-container");
var hotel = document.querySelectorAll(".hotel-container");
var offer = document.querySelectorAll(".offer-container");
var  of   = document.querySelectorAll("#offerBtn");
var  pb   = document.querySelectorAll("#packBtn");
var  hb   = document.querySelectorAll("#hotelBtn");

function hotelBtn(){

        hb[0].style.backgroundColor="crimson";
	    hb[0].style.color="white";
		of[0].style.backgroundColor="";
	    of[0].style.color="";
		pb[0].style.backgroundColor="";
	    pb[0].style.color=""; 
		
        package[0].style.display="none";
		offer[0].style.display="none";
		hotel[0].style.display="block"; 
	
}
function packageBtn(){
        pb[0].style.backgroundColor="crimson";
	    pb[0].style.color="white";
		of[0].style.backgroundColor="";
	    of[0].style.color="";
		hb[0].style.backgroundColor="";
	    hb[0].style.color="";
	
        hotel[0].style.display="none";
		offer[0].style.display="none";
		package[0].style.display="block"; 
	
}
function offerBtn(){
    of[0].style.backgroundColor="crimson";
	of[0].style.color="white";
	pb[0].style.backgroundColor="";
	pb[0].style.color="";
	hb[0].style.backgroundColor="";
	hb[0].style.color="";
	
	hotel[0].style.display="none";
	package[0].style.display="none";
	offer[0].style.display="block";
}
/* ......................book button code for displaying and hiding it..........................*/
/*.......................................package heart change..............................*/

/*...................................................package heart change end.............................*/


/*-----------------------------------------play video on button click---------------------------------*/
var video = document.querySelectorAll(".video1");
var playButton = document.querySelectorAll(".play-btn");

function playing(){
console.log("jmd");
video[0].play();
playButton[0].style.display="none";
video[0].onended = function(e) {
       playButton[0].style.display="block";
    };

}

function videoBox(){
var videoPlay = video[0].play();
var videoPause = video[0].pause();
if(video[0].play()){
       video[0].pause();
	   playButton[0].style.display="block";
}
}
/*-----------------------------------------play video on button click ends---------------------------------*/

































