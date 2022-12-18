console.log("popup.js loaded");

const button = document.querySelector("button");
button.addEventListener("click", async () => {
    console.log("button clicked");
    
    // alert("button clicked");

    chrome.runtime.sendMessage({
        msg: "buttonClicked", 
        data: {
            subject: "Button-was-clicked",
            content: {fonts: {"span": "Times New Roman", "p": "Times New Roman", "em": "Comic Sans MS", "b": "Comic Sans MS", "i": "Comic Sans MS", "u": "Comic Sans MS", "a": "Comic Sans MS", "li": "Comic Sans MS", "td": "Comic Sans MS", "th": "Comic Sans MS", "input": "Comic Sans MS", "option": "Comic Sans MS", "h1": "Georgia", "h2": "Monaco", "h3": "Droid Sans", "h4": "Comic Sans MS", "h5": "Comic Sans MS", "h6": "Comic Sans MS", "div": "Comic Sans MS", "default": "Comic Sans MS"}}
        }
    });

   
});