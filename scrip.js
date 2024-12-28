
    /********************************************************/ 
    /*********** Las delicas de Estrella Magica *************/ 
    /********************************************************/ 

const stock = [
    {nombre: 'Torta Inglesa', precio: 2500, img:'./assets/img/tortaInglesa.webp'}
]

let productosDisponibles = document.createElement('article')

productosDisponibles = `
    
    <img src="${img}" alt="">
    <p>${nombre} + $${precio}</p>
    <button>Comprar</button>
    
`


