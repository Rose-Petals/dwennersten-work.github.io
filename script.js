let mybutton = document.getElementById("firstbutton");
let myparagraph = document.getElementById("paragraph");
mybutton.onclick = function() {
    myparagraph.innerText += "You clicked the button!"
};
