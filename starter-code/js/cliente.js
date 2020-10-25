// To - do
function print_productos_tienda(arr_productos_tienda) {

    // borrar cuando se trabaje en ella, esto es sólo un ejemplo.
    // Creas un botón en la lista de los productos de la tienda:

    for (let i = 0; i < arr_productos_tienda.length; i++) {
        let contenido_list =
            `<h2>${arr_productos_tienda[i].name}</h2>
    <img src="" alt="imagen producto">
    <input placeholder="cantidad"></input>
    <p>Unidades: ${arr_productos_tienda[i].quantity}</p>
    <p>precio: ${arr_productos_tienda[i].price}€</p>
    <button>Comprar</button>`;

        print_elemento('ul_productos_tienda', 'li', contenido_list);
    }


}

// To - do
function add_productos_tienda(arr_productos_stock) {
}


// To - do
function remove_productos_tienda(arr_productos_stock) {
}

// To - do
function buy_producto() {
}
