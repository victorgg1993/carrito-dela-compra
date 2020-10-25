// To - do
function print_productos_tienda(arr_productos_tienda) {

    for (let i = 0; i < arr_productos_tienda.length; i++) {

        let contenido_list =
            `<h2>${arr_productos_tienda[i].name}</h2>
    <img src="" alt="imagen producto">
    <input type="number" value="1" min="1" max="${arr_productos_tienda[i].quantity}"></input>
    <p>${arr_productos_tienda[i].quantity} uds. disponibles</p>
    <p id="p_precio_producto">precio: ${arr_productos_tienda[i].price}€</p>
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
