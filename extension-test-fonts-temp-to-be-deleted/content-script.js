// document.body.style.backgroundColor = 'orange';
document.body.style.fontFamily = 'Helvetica, sans-serif';

// fonts = ["Times New Roman, serif", "Helvetica, sans-serif", "Georgia, serif", "Monaco, monospace", "Droid Sans, sans-serif"];
let tags = ["span", "p", "em", "b", "i", "u", "a", "li", "td", "th", "input", "option", "h1", "h2", "h3", "h4", "h5", "h6"];

let fonts = {"span": "Times New Roman", "p": "Helvetica", "em": "Helvetica", "b": "Helvetica", "i": "Helvetica", "u": "Helvetica", "a": "Helvetica", "li": "Helvetica", "td": "Helvetica", "th": "Helvetica", "input": "Helvetica", "option": "Helvetica", "h1": "Georgia", "h2": "Monaco", "h3": "Droid Sans", "h4": "Helvetica", "h5": "Helvetica", "h6": "Helvetica", "default": "Helvetica"}
let colors = {"span": "red", "p": "white", "em": "white", "b": "white", "i": "white", "u": "white", "a": "white", "li": "white", "td": "white", "th": "white", "input": "white", "option": "white", "h1": "white", "h2": "white", "h3": "white", "h4": "white", "h5": "white", "h6": "white", "default": "white"}


for (let i = 0; i < tags.length; i++) {
    let elements = document.getElementsByTagName(tags[i]);
    for (let j = 0; j < elements.length; j++) {
        elements[j].style.fontFamily = fonts[tags[i]];
        elements[j].style.backgroundColor = 'black';
        elements[j].style.color = colors[tags[i]];
    }
}



console.log("content-script.js loaded");