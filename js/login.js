const usuarioLogueadoId = sessionStorage.getItem("usuarioId");

if (usuarioLogueadoId) {
    window.location.href = "./perfil.html";
}

const formulario = document.getElementById("login-form");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const respuesta = await fetch("https://tp3-prograiii-backend.onrender.com/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!respuesta.ok) {
            alert("Email o contraseña incorrectos");
            return; 
        }

        const usuarioValidado = await respuesta.json();

        sessionStorage.setItem("usuarioId", usuarioValidado.id);

        window.location.href = "./perfil.html";

    } catch (error) {
        console.error("Error en el login:", error);
        alert("Error al intentar conectar con el servidor.");
    }
});
