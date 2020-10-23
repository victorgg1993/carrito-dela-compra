
// pinta los productos en stock al HTML
function print_productos_stock(arr_productos_stock) {

    // no es definitivo

    arr_productos_stock.map((elemento) => print_elemento('ul_productos_stock', 'li',
        `${elemento.name} -- \
    precio ${elemento.price}€ -- \
    cantidad: <input type="text" placeholder="Cantidad" value="${elemento.quantity}"> -- \
    precio total: ${(elemento.price * elemento.quantity).toFixed(2)}€ -- \
    <button>Eliminar</button>`
    ));
}

// To - do
function add_productos_stock(arr_productos_stock, producto) {
}

// To - do
function remove_productos_stock(arr_productos_stock) {
}
