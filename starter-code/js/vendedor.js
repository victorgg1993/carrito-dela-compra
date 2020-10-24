// pinta los productos en stock al HTML
function print_productos_stock(arr_productos_stock) {

    // <li> de cada producto en stock
    let padre = document.getElementById('ul_productos_stock');

    for (let i = 0; i < arr_productos_stock.length; i++) {

        let datos = { // con esta estructura de datos solamente pasamos un parámetro, es más flexible
            padre: padre,
            elemento: arr_productos_stock[i],
            id_input: i,
            id_boton: i,
            texto_btn: "Eliminar",
            lstn_in: listener_input_cantidad,
            lstn_btn: listener_boton_eliminar
        };

        pintar_li_producto_stock(datos);
    }

    // <li> añadir nuevo producto
    let datos = { // con esta estructura de datos solamente pasamos un parámetro, es más flexible
        padre: padre,
        elemento: { name: "nombre producto", price: 0, quantity: 0 },
        texto_btn: "Añadir",
        lstn_in: listener_input_cantidad_add,
        lstn_btn: listener_boton_add
    };

    pintar_li_producto_stock(datos); // <li> para añadir un producto
}

// Done. Pinta una <li> de producto en stock o un <li> para añadir producto en stock
// mediante el objeto "datos" eliges su comportamiento.
// Mirar el contenido de print_productos_stock()
function pintar_li_producto_stock(datos) {

    // <li>
    let lista = document.createElement('li');
    datos.padre.appendChild(lista);

    switch (datos.texto_btn) { // Nombre producto

        case 'Añadir': // Si es añadir, el nombre se puede cambiar
            let casilla_nombre = document.createElement('input');
            casilla_nombre.placeholder = "Nombre producto";
            lista.appendChild(casilla_nombre);
            break;

        case 'Eliminar': // Si es eliminar, el nombre no se cambia
            let titulo = document.createElement('h1');
            titulo.innerText = datos.elemento.name;
            lista.appendChild(titulo);
            break;
    }

    switch (datos.texto_btn) { // casilla de precio por unidad

        case 'Añadir': // Si es añadir, el precio es editable
            let in_precio = document.createElement('input');
            in_precio.placeholder = "Precio €";
            lista.appendChild(in_precio);
            break;

        case 'Eliminar': // Si es eliminar, el precio no es editable
            let precio = document.createElement('p');
            precio.innerText = `precio ${datos.elemento.price}€`;
            lista.appendChild(precio);
            break;
    }

    // casilla (editable) de cantidad
    let casilla_cantidad = document.createElement('input');
    casilla_cantidad.id = datos.id_input;
    casilla_cantidad.placeholder = "Cantidad";

    if (datos.texto_btn == 'Eliminar') {
        casilla_cantidad.value = datos.elemento.quantity;
    }
    lista.appendChild(casilla_cantidad);
    casilla_cantidad.addEventListener('change', datos.lstn_in);


    // casilla precio final
    let precio_total = document.createElement('p');
    precio_total.innerText = ` ${(datos.elemento.price * datos.elemento.quantity).toFixed(2)}€`;
    lista.appendChild(precio_total);

    // botón eliminar
    let boton_eliminar = document.createElement('button');
    boton_eliminar.id = datos.id_boton;
    boton_eliminar.innerText = datos.texto_btn;
    lista.appendChild(boton_eliminar);
    boton_eliminar.addEventListener('click', datos.lstn_btn);
}

// No usar
function listener_input_cantidad_add() {} // No usar

// To - do
function listener_boton_add() {
    console.log("Botón añadir pulsado!");
}

// To - do
function listener_boton_eliminar(evento_boton) {
    let id_boton = evento_boton.explicitOriginalTarget.id;
    objeto_JSON.splice(id_boton, 1);
    /* Funciona solo la primera vez porque luego el ID del boton no coincide con el indice del producto en la array
    let child = document.getElementById("ul_productos_stock").getElementsByTagName("li")[id_boton];
    document.getElementById("ul_productos_stock").removeChild(child);
    */
}

// To - do
function listener_input_cantidad(evento_input) {
    console.log("input listener");
    let id_input = evento_input.explicitOriginalTarget.id;
    objeto_JSON[id_input].quantity = parseInt(evento_input.explicitOriginalTarget.value);
    /*
        let padre = document.getElementById('ul_productos_stock');
        let datos = { // con esta estructura de datos solamente pasamos un parámetro, es más flexible
            padre: padre,
            elemento: { name: "nombre producto", price: 0, quantity: 0 },
            texto_btn: "Añadir",
            lstn_in: listener_input_cantidad_add,
            lstn_btn: listener_boton_add
        };

        pintar_li_producto_stock(datos);
    */
}

// To - do
function listener_add_producto_stock() {
    //let objeto_producto = leer_producto_stock();
}



// To - do
function leer_producto_stock() {
    return 0;
}

// To - do
function add_producto_stock(arr_productos_stock, producto) {
    arr_productos_stock.push(producto);
}

// To - do
function remove_producto_stock(arr_productos_stock) {

}