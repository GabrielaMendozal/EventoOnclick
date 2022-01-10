console.log("pag loaded...");

function mensaje() {
    alert("Ninja was liked");
}

function login(elemento) {
    if(elemento.innerText == "Login") {
        elemento.innerText = "Logout";
    } else {
        elemento.innerText = "Login";
    }
}

function definition(elemento) {
    elemento.remove();
}