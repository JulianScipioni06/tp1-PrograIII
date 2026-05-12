const formulario = document.getElementById("login-form");

formulario.addEventListener("submit", async (event) => {

    // Evita recargar la página
    event.preventDefault();

    // Obtener datos del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    /*
    const respuesta = await fetch("", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            password
        })
    });

    const usuario = await respuesta.json();
    */

    // Simulación temporal frontend
    const usuario = {
        nombre: "alfredo",
        apellido: "bananini",
        email: email
    };

    // Guardar usuario
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Redirección al perfil
    window.location.href = "./perfil.html";
});