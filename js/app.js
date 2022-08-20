console.log("hola");
const email=document.getElementById("email");
const email2=document.getElementById("email2");
const error=document.querySelector(".error");
const error2=document.querySelector(".error2");
const btn=document.querySelector(".button");
const btnE=document.querySelector(".btnE");
//evento del boton
btn.addEventListener("click", () => {
    console.log("di click");
    if(email.value.includes("@") && email.value.includes(".com")){
        error.classList.remove("visible");
    }else{
        error.classList.add("visible");
    }
});

btnE.addEventListener("click", () => {
    console.log("di click footer");
    if(email2.value.includes("@") && email2.value.includes(".com")){
        error2.classList.remove("visible");
    }else{
        error2.classList.add("visible");
    }
});
