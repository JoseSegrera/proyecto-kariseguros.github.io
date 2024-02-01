const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    }
)

cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    }
)

/*SLIDER-SERVICIOS*/
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 5000);


/*FORMULARIO-CONTACTENOS*/
document.getElementById("miFormulario").addEventListener('submit', function(e) {
    let nombre = document.getElementById('nombre').value;
    if (!nombre) {
        e.preventDefault();
        document.getElementById('errorNombre').textContent = 'El nombre es requerido.';
    } else {
        Document.getElementById('errorNombre').textContent = '';
    }

    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        e.preventDefault();
        document.getElementById('errorEmail').textContent = 'El email no es válido.';
    } else {
        Document.getElementById('errorEmail').textContent = '';
    }
    
    let contrasena = document.getElementById('contrasena').value;
    if (contrasena.length < 8) {
        e.preventDefault();
        document.getElementById('errorContrasena').textContent = 'La contraseña debe tener al menos 8 caracteres';
    } else {
        document.getElementById('errorContrasena').textContent = '';
    }
});
