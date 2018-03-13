/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
var myImage = new Image(1000, 800);
myImage.src = "images/mug.jpeg"

let body = document.body;
body.innerText = "";

body.style.background = "rgb(38, 156, 98)";

let elmnt = document.createElement("div");
let elmnt1 = document.createElement("h1");
let elmnt2 = document.createElement("h2");
let elmnt3 = document.createElement("p");
let elmnt4 = document.createElement("p");
let elmnt5 = document.createElement("a");

elmnt1.innerText = "Kenzie's Art site";
elmnt2.innerText = "Look at this cool mug!"
elmnt3.innerText = "I've only just starting making ceramics just last semester, but It's a lot of fun to create these mugs and bowls and I think this art medium will be sticking around me for a while."
elmnt4.innerText = "Here on this site is an example of what I've been working on.";
elmnt5.innerText = "Click here to view artwork from other artists.";

elmnt.setAttribute("style", "text-align: center");
elmnt1.setAttribute("style","padding:0.5em; margin:0; font-family: sans-serif; text-align:center; color:#ffffff");
elmnt2.setAttribute("style","padding:0em; margin:0; font-weight: normal; font-family: sans-serif; text-align:center; color:#ffffff");
elmnt3.setAttribute("style","padding:2em; margin:0; font-family: sans-serif; text-align:center; color:#ffffff");
elmnt4.setAttribute("style","padding:0em; margin:0; font-family: sans-serif; text-align:center; color:#ffffff");
elmnt5.setAttribute("href", "http://www.missoulaartmuseum.org/");
elmnt6.setAttribute("style", "font-family: sans-serif; text-decoration: none; color:#067388; border-style: outset");


myImage.setAttribute("style", "padding:0em; margin:100px");

elmnt.appendChild(elmnt1);
elmnt.appendChild(elmnt2);
elmnt.appendChild(elmnt3);
elmnt.appendChild(elmnt4);
elmnt.appendChild(myPic);
elmnt.appendChild(elmnt5);
elmnt.appendChild(elmnt6);

body.appendChild(elmnt);