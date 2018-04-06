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
let divEl1 = document.querySelector(".storageDiv");
let divEl2= document.querySelector(".slideshow-container")
let formEl1 = document.querySelector(".nameForm");

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
        dots[i].className = dots[i].className.replace(" active");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("enter a name!"); return }

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


    } else {
        btEl.innerText = "Hide in Closet";
        textEl.hidden = true;
        divEl2.hidden=true;
        formEl1.hidden = false;
        divEl1.hidden=false;
        textEl3.hidden=false;
        btEl2.hidden=false;
        el.hidden=false;

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


    } else {
        btEl2.innerText = "Go Outside";
        textEl2.hidden = true;
        imgEl1.hidden=true;
        formEl1.hidden=false;
        divEl1.hidden= false;
        textEl3.hidden=false;
        btEl.hidden=false;
        el.hidden=false;

body.appendChild(el);
