const inputTarea = document.querySelector('input')
const botonAgregar = document.querySelectorAll('button')[0]
const form = document.querySelector('form')
const lista = document.querySelector('ul')
const tituloLista = document.querySelector('h3')

function eliminarLi(li) {
    li.parentNode.removeChild(li)
}

function agregarLi(nombreDeTarea) {
    let nuevoLi = document.createElement("li")
    nuevoLi.className = 'fs-5'
    nuevoLi.textContent = nombreDeTarea

    let botonEliminar = document.createElement('i')
    botonEliminar.className = 'bi bi-x-circle-fill ms-2'

    botonEliminar.addEventListener('click', () => {
        eliminarLi(nuevoLi)
    })

    nuevoLi.appendChild(botonEliminar)

    lista.appendChild(nuevoLi)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(inputTarea.value.trim() !== ''){
        tituloLista.classList = ''

        agregarLi(inputTarea.value)
    }

    inputTarea.value = ''
})

