console.log("witam w moim skrypcie");
let bt=document.querySelector(".bt");
let yt=document.querySelector(".yt");
bt.addEventListener("click", () => {
    yt.remove();
    window.open("https://youtu.be/ca90ini4jM4")
} );