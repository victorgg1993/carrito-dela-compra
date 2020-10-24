// pinta los productos en stock al HTML
function print_productos_stock(arr_productos_stock) {

    // <li> de cada producto en stock
    let padre = document.getElementById('ul_productos_stock');

    for (let i = 0; i < arr_productos_stock.length; i++) {

        let datos = { // con esta estructura de datos solamente pasamos un parámetro, es más flexible
            padre: padre,
            elemento: arr_productos_stock[i],
            id: i,
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
        id_p: "add",
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
    lista.id = 'li_producto_stock_' + datos.id;
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
            precio.id = ("p_precio_" + datos.id);
            precio.innerText = `Precio: ${datos.elemento.price}€`;
            lista.appendChild(precio);
            break;
    }

    let nombre_cantidad = document.createElement('label');
    nombre_cantidad.innerText = `Cantidad:`;
    lista.appendChild(nombre_cantidad);

    // casilla (editable) de cantidad
    let casilla_cantidad = document.createElement('input');
    casilla_cantidad.id = ("input_cantidad_" + datos.id);
    casilla_cantidad.placeholder = "Cantidad";

    if (datos.texto_btn == 'Eliminar') {
        casilla_cantidad.value = datos.elemento.quantity;
    }
    lista.appendChild(casilla_cantidad);
    casilla_cantidad.addEventListener('change', datos.lstn_in);


    // casilla precio final
    let precio_total = document.createElement('p');
    precio_total.innerText = `Total: ${(datos.elemento.price * datos.elemento.quantity).toFixed(2)}€`;
    precio_total.id = ("p_total_" + datos.id);
    lista.appendChild(precio_total);

    // botón eliminar
    let boton_eliminar = document.createElement('button');
    boton_eliminar.id = ("button_eliminar_" + datos.id);
    boton_eliminar.innerText = datos.texto_btn;
    lista.appendChild(boton_eliminar);
    boton_eliminar.addEventListener('click', datos.lstn_btn);
}

// No usar
function listener_input_cantidad_add() { } // No usar

// To - do
function listener_boton_add() {
    console.log("Botón añadir pulsado!");
}

// To - do
function listener_boton_eliminar(evento_boton) {
    console.log("debug: btn eliminar");
    let id_boton = evento_boton.explicitOriginalTarget.id;
    id_boton = id_boton.replace(/^\D+/g, '');

    console.log("asd: ", `li_producto_stock_${id_boton}`);

    document.getElementById(`li_producto_stock_${id_boton}`).remove(); // rm <li>

    objeto_JSON.splice(id_boton, 1);
    console.log("objeto json: ", objeto_JSON);
    
}

// To - do
function listener_input_cantidad(evento_input) {

    let id_input = evento_input.explicitOriginalTarget.id.replace(/^\D+/g, '');
    objeto_JSON[id_input].quantity = parseInt(evento_input.explicitOriginalTarget.value);

    // pintar de nuevo
    let asd = document.getElementById(`p_precio_${id_input}`).innerText;
    let objeto_input = document.getElementById(`input_cantidad_${id_input}`);

    asd = asd.replace('€', '').replace(/^\D+/g, '');

    let precio_nuevo = (asd * objeto_input.value);
    document.getElementById(`p_total_${id_input}`).innerText = `Total: ${precio_nuevo.toFixed(2)}€`
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