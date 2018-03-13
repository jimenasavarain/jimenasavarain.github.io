var stars = document.getElementById("stars");
var sun = document.getElementById("sun");
var calendar = document.getElementById("calendar");
var bluebird = document.getElementById("bluebird");
var pinkbird = document.getElementById("pinkbird");
var yellowbird = document.getElementById("yellowbird");
var bees = document.getElementById("bees");
var ladybugs1 = document.getElementById("ladybugs1");
var ladybugs2 = document.getElementById("ladybugs2");
var backtulips = document.getElementById("backtulips");
var fronttulips = document.getElementById("fronttulips");
var girl = document.getElementById("girl");
var mom = document.getElementById("mom");
var arm = document.getElementById("arm");
var bouquet = document.getElementById("bouquet");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eighth = document.getElementById("eighth");
var ninenth = document.getElementById("ninenth");
var tenth = document.getElementById("tenth");

var button = document.getElementById("button");
var outside = document.getElementById("outside");

var num = 5;


/*end of variables*/

/* bird animations */

bluebird.addEventListener("mouseenter", function(){
  
        bluebird.style.left = "80px";
        bluebird.style.top = "400px";
});

yellowbird.addEventListener("mouseenter", function(){
  
        yellowbird.style.left = "350px";
        yellowbird.style.top = "390px";
});

pinkbird.addEventListener("mouseenter", function(){
  
        pinkbird.style.left = "250px";
        pinkbird.style.top = "430px";
});

/* outside */

button.addEventListener("click", function(){
    inside.style.display = "block";
});

button.addEventListener("click", function(){
   outside.style.display = "none"; 
});

/*displaying facts*/

bluebird.addEventListener("click", function toFacts(){
    if (first.style.display == "block") {
        first.style.display = "none";
    } else {
        first.style.display = "block";
    }
});

bees.addEventListener("click", function toFacts(){
    if (second.style.display == "block") {
        second.style.display = "none";
    } else {
        second.style.display = "block";
    }
});

calendar.addEventListener("click", function toFacts(){
   if (third.style.display == "block") {
       third.style.display = "none";
   } else {
       third.style.display = "block";
   }
});

ladybugs1.addEventListener("click", function toFacts(){
    if (fourth.style.display == "block") {
        fourth.style.display = "none";
    } else {
        fourth.style.display = "block";
    }
});

ladybugs2.addEventListener("click", function toFacts(){
    if (fifth.style.display == "block") {
        fifth.style.display = "none";
    } else {
        fifth.style.display = "block";
    }
});

yellowbird.addEventListener("click", function toFacts(){
    if (sixth.style.display == "block") {
        sixth.style.display = "none";
    } else {
        sixth.style.display = "block";
    }
});

sun.addEventListener("click", function toFacts(){
   if (seventh.style.display == "block") {
       seventh.style.display = "none";
   } else {
       seventh.style.display = "block";
   }
});

stars.addEventListener("click", function toFacts(){
    if (eighth.style.display == "block") {
        eighth.style.display = "none";
    } else {
        eighth.style.display = "block";
    }
});

pinkbird.addEventListener("click", function toFacts(){
    if (ninenth.style.display == "block") {
        ninenth.style.display = "none";
    } else {
        ninenth.style.display = "block";
    }
});

bouquet.addEventListener("click", function toFacts(){
    if (tenth.style.display == "block") {
        tenth.style.display = "none";
    } else {
        tenth.style.display = "block";
    }
});

