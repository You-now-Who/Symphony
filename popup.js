console.log("popup.js loaded");
let fonts

chrome.storage.local.get(['fonts'], function(result) {
    console.log('Value popup currently is: ')
    console.log(result.fonts);
    fonts = result.fonts;

    document.getElementById("h1Font").value = fonts.h1
    document.getElementById("h2Font").value = fonts.h2
    document.getElementById("h3Font").value = fonts.h3
    document.getElementById("h4Font").value = fonts.h4
    document.getElementById("pFont").value = fonts.p
    document.getElementById("aFont").value = fonts.a
    document.getElementById("liFont").value = fonts.li
    document.getElementById("divFont").value = fonts.div
    console.log('Values set!')
});


const button = document.querySelector("#btn");
button.addEventListener("click", async () => {
    console.log("button clicked");
    
    // alert("button clicked");

    document.getElementById("btn").innerHTML = "Clicked";

    ;

    let h1Font = document.getElementById("h1Font").value;
    let h2Font = document.getElementById("h2Font").value;
    let h3Font = document.getElementById("h3Font").value;
    let h4Font = document.getElementById("h4Font").value;
    let pFont = document.getElementById("pFont").value;
    let aFont = document.getElementById("liFont").value;
    let liFont = document.getElementById("liFont").value;
    let divFont = document.getElementById("divFont").value;

    console.log("h1Font: ");
    console.log (h1Font);
    chrome.runtime.sendMessage({
        msg: "buttonClicked", 
        data: {
            subject: "Button-was-clicked",
            content: {fonts: {"span": divFont, "p": pFont, "em": pFont, "b": pFont, "i": pFont, "u": pFont, "a": aFont, "li": liFont, "td": pFont, "th": pFont, "input": pFont, "option": liFont, "h1": h1Font, "h2": h2Font, "h3": h3Font, "h4": h4Font, "h5": h4Font, "h6": h4Font, "div": h4Font, "default": pFont}}
        }
    });

   
});