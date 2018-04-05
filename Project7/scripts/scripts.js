let body = document.body;
let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement('p');
let elChild3 = document.createElement('P');
let btEl = document.querySelector('#b1');
let btEl2 = document.querySelector('#b2');
let textEl = document.querySelector(".extra-text-container");
let textEl2 = document.querySelector(".another-text-container");
let textEl3 = document.querySelector(".original-text-container");
let imgEl1 = document.querySelector(".img1");
let divEl1 = document.querySelector(".storageDiv");
let divEl2= document.querySelector(".slideshow-container")
let formEl1 = document.querySelector(".nameForm");

elChild.innerText = "CHOOSE WISELY";
elChild2.innerText="There are choices that seem easy and some that seem difficult. In the end the flapping of a butterflies wings can change the world, so how are we to know if our choices are correct?";
elChild3.innerText="Perhaps we have already made our choices, for better or worse. Perhaps we only need to understand the choices we have made.";
elChild2.setAttribute("style","padding:0em; margin:0; font-style:italic; text-align:center; color: white;  text-shadow: 2px 2px #030303;");
elChild3.setAttribute("style","padding:0em; margin:0;  font-style:italic;  text-align:center; color:white;  text-shadow: 2px 2px #030303;");

btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);

divEl2.setAttribute("style","text-align: center");
imgEl1.setAttribute("style","text-align: center");

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("Please refresh the browser and enter a name!"); return }


    let textToAdd = document.createTextNode("Hello "+textIn+" welcome to the question!");
    let textToAdd2 = document.createTextNode(textIn+ " is freedom of choice an illusion?");
    let textToAdd3 = document.createTextNode("You must make the choice " +textIn+ ".");

    let newP = document.createElement("P");
    let newP2= document.createElement("P");
    let newP3= document.createElement("P");

    newP.appendChild(textToAdd);
    newP2.appendChild(textToAdd2);
    newP3.appendChild(textToAdd3);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP);
    storage.appendChild(newP2);
    storage.appendChild(newP3);
}

document.querySelector("#runButton").addEventListener( 'click',grabText);

function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Return";
        textEl.hidden = false;
        divEl2.hidden = false;
        formEl1.hidden = true;
        divEl1.hidden= true;
        textEl3.hidden = true;
        textEl2.hidden= true;
        btEl2.hidden=true;
        el.hidden=true;

        body.style.background = "#030303 url('images/lightBack.jpg') repeat right top";
         setTimeout(()=>{body.style.background = "#030303 url('images/blueBack.jpg') repeat right top" ;}, 3000 );

    } else {
        btEl.innerText = "Red Button";
        textEl.hidden = true;
        divEl2.hidden=true;
        formEl1.hidden = false;
        divEl1.hidden=false;
        textEl3.hidden=false;
        btEl2.hidden=false;
        el.hidden=false;

        body.style.background = "#030303 url('./images/darkBack.jpg') repeat right top";
    }
}

function showHideText2() {
    if(textEl2.hidden){
        btEl2.innerText = "Return";
        textEl2.hidden = false;
        imgEl1.hidden=false;
        formEl1.hidden= true;
        divEl1.hidden=true;
        textEl3.hidden=true;
        textEl.hidden=true;
        btEl.hidden=true;
        el.hidden=true;

        body.style.background = "#030303 url('images/orangeBack.jpg') repeat right top";
        setTimeout(()=>{body.style.background = "#030303 url('images/orangeBack2.jpg') repeat right top" ;}, 3000 );

    } else {
        btEl2.innerText = "Blue Button";
        textEl2.hidden = true;
        imgEl1.hidden=true;
        formEl1.hidden=false;
        divEl1.hidden= false;
        textEl3.hidden=false;
        btEl.hidden=false;
        el.hidden=false;

        body.style.background = "#030303 url('images/darkBack.jpg') repeat right top";
    }
}


body.style.padding = "0 em";
body.style.margin="0 em";
body.style.background = "#030303 url('./images/darkBack.jpg') repeat right top";

el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3)
body.appendChild(el);
