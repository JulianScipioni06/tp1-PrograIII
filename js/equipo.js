const contenedorEquipo = document.querySelector('#contenedor-equipo')
const spinner = document.querySelector('#spinner')

let todosLosMiembros = [] 

function mostrarSpinner(){ 
    spinner.style.display = 'flex'
}
function ocultarSpinner(){ 
    spinner.style.display = 'none'
}

async function getEquipo() {
    mostrarSpinner()
    try {
        const response = await fetch("https://tp3-prograiii-backend.onrender.com/equipo")

        const data = await response.json()

        todosLosMiembros = data
        
        // ACÁ ESTABA EL ERROR: Cambiamos filtrar() por mostrarMiembros()
        mostrarMiembros(data, contenedorEquipo)
        
    } catch (error) {
        console.log("Error al cargar los miembros del equipo", error)
    } finally{
        ocultarSpinner()
    }
}

function mostrarMiembros(lista, contenedor){
    contenedor.innerHTML = ''

    lista.forEach(miembro =>{
        const div = document.createElement('div')

        div.classList.add('Tarjeta') 

        div.innerHTML = `
            <img src="../assets/img/${miembro.imagen}" alt="${miembro.nombre}">
            <h3>${miembro.nombre}</h3>
            <p class="puesto">${miembro.puesto}</p>
        `
        contenedor.append(div)
    })
}

getEquipo()