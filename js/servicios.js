const contenedorMates = document.querySelector('#contenedor-mates')
const contenedorBombillas = document.querySelector('#contenedor-bombillas')
const contenedorCanastas = document.querySelector('#contenedor-canastas')
const spinner = document.querySelector('#spinner')

function mostrarSpinner(){ //Mostramos el simbolo de carga
    spinner.style.display = 'flex'
}
function ocultarSpinner(){ //Ocultamos el simbolo de carga
    spinner.style.display = 'none'
}

async function getServicios() {
    mostrarSpinner()
    try {

      

        const response = await fetch("../js/servicios.json")
        const data = await response.json()

        const mates = data.filter(item => item.categoria === "mate")
        const bombillas = data.filter(item => item.categoria === "bombilla")
        const canastas = data.filter(item => item.categoria === "matera")

        mostrarProductos(mates , contenedorMates)
        mostrarProductos(bombillas , contenedorBombillas)
        mostrarProductos(canastas,contenedorCanastas)
        
    } catch (error) {
        console.log("Error al cargar los servicios", error)
    } finally{
        ocultarSpinner()
    }
    
}

function mostrarProductos(lista, contenedor){
    lista.forEach(producto =>{
        const div = document.createElement('div')
        div.classList.add('tarjeta-servicio')

        const etiquetas= producto.materiales.map(material => `<span class="etiqueta"> ${material} </span>`).join('')

        div.innerHTML = `
            <img src="../assets/img/${producto.imagen}" alt="${producto.desc}" class="imagen-tarjeta">
            <div class="contenido-tarjeta">
                <h3>${producto.desc}</h3>
                <p>${producto.detalle}</p>
                <p class="titulo-materiales">Disponible en:</p>
                <div class ="contenedor-etiquetas">
                    ${etiquetas}
                </div>
            </div>
            <p class="precio">$${producto.precio}</p>
        `
        contenedor.append(div)
    })

}

getServicios()
