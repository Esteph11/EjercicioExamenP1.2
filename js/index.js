// Obtener la lista de productos  
fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // Conversión a JSON  
    .then(data => {
        mostrarProductos(data);
    })
    .catch(error => console.error('Error al obtener los productos:', error)); // Manejo de errores  

// Función para mostrar los productos  
function mostrarProductos(productos) {

    let cards = ''; // Inicializar la variable para acumular las tarjetas  

    // Crear la tarjeta para cada producto  
    productos.forEach(producto => {
        cards += `<div class="card border-secondary mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">  
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>  
                        <p class="card-text">Categoría: ${producto.category}</p>  
                        <p class="card-text">Precio: $${producto.price.toFixed(2)}</p>  
                        <p class="card-text">${producto.description}</p>  
                    </div>  
                </div>  
            </div>   
        </div>`;
    });

    // Renderizar las tarjetas a HTML  
    document.getElementById("productosList").innerHTML = cards;
}  
