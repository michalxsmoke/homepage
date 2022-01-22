console.log("Hi!");
let button=document.querySelector(".button");
let body=document.querySelector(".body");
let nav=document.querySelector(".navigation");
let main=document.querySelector(".main");
let header=document.querySelector(".header");
let footer=document.querySelector(".footer");
let headerIn=document.querySelector(".headerIn");
let table=document.querySelector(".table");

button.addEventListener("click", () => {
    headerIn.classList.toggle("matrix");
    body.classList.toggle("matrix");
    main.classList.toggle("matrix");
    header.classList.toggle("matrix");
    nav.classList.toggle("matrix");
    footer.classList.toggle("matrix");
    table.classList.toggle("matrix");
    button.innerText=body.classList.contains("matrix")? "NORMAL" : "MATRIX";
} );