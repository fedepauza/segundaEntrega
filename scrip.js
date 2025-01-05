
    /********************************************************/ 
    /*********** Las delicas de Estrella Magica *************/ 
    /********************************************************/ 

const stock = [
    {nombre: 'Torta 1', precio: 2500, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 2', precio: 4000, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 3', precio: 3200, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 4', precio: 2800, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 5', precio: 3500, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 6', precio: 2100, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 7', precio: 2000, img:'./assets/img/tortaInglesa.webp'},
    {nombre: 'Torta 8', precio: 4500, img:'./assets/img/tortaInglesa.webp'}
]

let productosDisponibles = document.getElementById("sectionImagenes")
let ticketFinal = document.getElementById("ticket")
let total = document.getElementById("total")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const actualizarTicket =  () => {
    ticketFinal.innerHTML = ""
    carrito.forEach(el => {
        ticketFinal.innerHTML += `
            <div class="conteiner">
                <h3 class="titulos">${el.nombre}</h3>
                <h3 class="titulos">$ ${el.precio}</h3>
                <h3 class="titulos">${el.cantidad}</h3>
                <button class="eliminar">Eliminar</button>
            </div>
        `
    })
    const botonesEliminar = document.getElementsByClassName("eliminar")
    const ArrayBotonesEliminar = Array.from(botonesEliminar)

    ArrayBotonesEliminar.forEach (el => {
        el.addEventListener("click", (e) => {

            let index = carrito.findIndex (el => el.nombre == e.target.parentElement.children[0].innerText)
            let producto = carrito[index]
            
            if (producto.cantidad == 1) {
                carrito.splice(index, 1)
            } else {
                producto.cantidad -= 1
            }

            actualizarTicket()
        
        })
    })
    total.innerText = "Total $" + carrito.reduce((acc, el) => {
        return acc + el.precio * el.cantidad
    }, 0)

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

stock.forEach(el => {
    productosDisponibles.innerHTML += `
        <div>
            <img src="${el.img}" alt="" class="imgTorta">
            <p>${el.nombre}</p>
            <p>$<span>${el.precio}</span></p>
            <button class="botonComprar">Comprar</button>
        </div>
    `
})

const botones = document.getElementsByClassName("botonComprar")
const ArrayBotones = Array.from(botones)

ArrayBotones.forEach(el => {
    el.addEventListener("click", (event) => {
        let tortas = carrito.find(el => el.nombre == event.target.parentElement.children[1].innerText)
        
        if (tortas) {
            tortas.cantidad += 1
        } else {
            carrito.push({
            
                nombre: event.target.parentElement.children[1].innerText,
                cantidad: 1,
                precio: Number(event.target.parentElement.children[2].children[0].innerText)
    
            })
        }
        
        actualizarTicket ()
    })
})

document.addEventListener("DOMContentLoaded", () => {
    actualizarTicket ()
})
