
        /********************************************************/ 
        /******************* Pruebas del DOM ********************/ 
        /********************************************************/ 

        let documento = document.getElementById('mainPrincipal');

        const productos = [
            {nombre: "Leche", precio: 125},
            {nombre: "Banana", precio: 100},
            {nombre: "Manzana", precio: 200},
            {nombre: "Azucar", precio: 150}
        ]
        documento.innerHTML = `
            
            <h1>Siguen las pruebas</h1>
            <p>Esto es un parrafo desde Javascript</p>
            <p>2do parrafo desde Javascript</p>
            <ul>
            ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
            </ul>
        
        `
        let cambio = document.getElementById('titulo')
        
        window.cambio.addEventListener ("mousever", porEncima)
        
        // window.getElementById("titulo").addEventListener ("mouseout", alQuitar)
        
        function porEncima () {
            
            cambio.style.fontColor = "blue"
        
        }
        
        function alQuitar () {
        
            document.getElementById("titulo").style.color = "orange"
        
        }
        
        
        