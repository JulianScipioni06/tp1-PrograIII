const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");

// Obtener usuario guardado
const usuario = JSON.parse(localStorage.getItem("usuario"));

// Si no existe usuario, volver al login
if (!usuario) {

    window.location.href = "./login.html";
}

/*
futura validacion backend

fetch("http://localhost:3000/perfil", {

    method: "GET",

    headers: {
        "Content-Type": "application/json",

        // Ejemplo JWT/token
        Authorization: `Bearer ${token}`
    }
})
.then((respuesta) => respuesta.json())
.then((data) => {

    console.log(data);
});
*/

// Mostrar datos usuario
nombre.textContent = usuario.nombre;
apellido.textContent = usuario.apellido;
email.textContent = usuario.email;

// Logout
const botonLogout = document.getElementById("logout-btn");

botonLogout.addEventListener("click", () => {

    /*
    fetch("http://localhost:3000/logout", {
        method: "POST"
    });
    */

    // Limpiar sesión frontend
    localStorage.removeItem("usuario");

    // Volver al login
    window.location.href = "./login.html";
});