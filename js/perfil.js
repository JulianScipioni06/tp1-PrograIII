const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const fechaRegistro = document.getElementById("fecha-registro");
const fotoPerfil = document.getElementById("foto-perfil");
const listaPedidos = document.getElementById("lista-pedidos");

// Obtener el ID que guardamos en el login
const usuarioId = sessionStorage.getItem("usuarioId");

if (!usuarioId) {
    window.location.href = "./login.html";
} else {
    cargarPerfilUsuario();
}

async function cargarPerfilUsuario() {
    try {
        const respuesta = await fetch(`https://tp3-prograiii-backend.onrender.com/usuarios/${usuarioId}`);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el perfil");
        }

        const dataUsuario = await respuesta.json();

        nombre.textContent = dataUsuario.nombre;
        email.textContent = dataUsuario.email;
        fechaRegistro.textContent = dataUsuario.fecha_registro;
        
        fotoPerfil.src = `../assets/img/${dataUsuario.foto}`;

        listaPedidos.innerHTML = "";
        
        if (dataUsuario.ultimos_pedidos && dataUsuario.ultimos_pedidos.length > 0) {
            dataUsuario.ultimos_pedidos.forEach(pedido => {
                const li = document.createElement("li");
                li.style.marginBottom = "10px";
                li.innerHTML = `<strong>${pedido.articulo}</strong> - Orden #${pedido.nro_orden} <br> <small>${pedido.fecha}</small>`;
                listaPedidos.appendChild(li);
            });
        } else {
            listaPedidos.innerHTML = "<li>Aún no tienes pedidos.</li>";
        }

    } catch (error) {
        console.error("Error al cargar los datos:", error);
        // Si falla, borramos la sesión y lo mandamos al login
        sessionStorage.removeItem("usuarioId");
        window.location.href = "./login.html";
    }
}

const botonLogout = document.getElementById("logout-btn");

botonLogout.addEventListener("click", () => {
    sessionStorage.removeItem("usuarioId");

    window.location.href = "./login.html";
});