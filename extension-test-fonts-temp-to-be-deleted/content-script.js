// document.body.style.backgroundColor = 'orange';
document.body.style.fontFamily = 'Helvetica, sans-serif';
let elements = document.getElementsByTagName("span");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "Times New Roman, serif";
    elements[i].style.backgroundColor = 'white';
    elements[i].style.color = 'red';
}

elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "Helvetica, sans-serif";
    elements[i].style.backgroundColor = 'green';
    elements[i].style.color = 'white';
}

elements = document.getElementsByTagName("h1");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "Georgia, serif";
    elements[i].style.backgroundColor = 'blue';
    elements[i].style.color = 'white';
}

elements = document.getElementsByTagName("h2");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "Monaco, monospace";
    elements[i].style.backgroundColor = 'red';
    elements[i].style.color = 'white';
}

elements = document.getElementsByTagName("h3");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "Droid Sans, sans-serif";
    elements[i].style.backgroundColor = 'yellow';
    elements[i].style.color = 'white';
}

console.log("content-script.js loaded");