// Countdown Timer (24 Hours)

let end = new Date().getTime() + 24 * 60 * 60 * 1000;

let timer = setInterval(function () {

let now = new Date().getTime();

let distance = end - now;

let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
let seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("timer").innerHTML =
hours+"h "+minutes+"m "+seconds+"s";

if(distance < 0){
clearInterval(timer);
document.getElementById("timer").innerHTML="Offer Ended";
}

},1000);


// Buy Button Animation

let btn=document.querySelectorAll(".buy-btn");

btn.forEach(function(b){

b.addEventListener("mouseover",function(){

b.style.transform="scale(1.08)";

});

b.addEventListener("mouseout",function(){

b.style.transform="scale(1)";

});

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});