
// pinta los productos en stock al HTML
function print_productos_stock(arr_productos_stock) {

    // no es definitivo
    let padre = document.getElementById('ul_productos_stock');

    for (let i = 0; i < arr_productos_stock.length; i++) {

        let elemento = arr_productos_stock[i];

        // <li>
        let lista = document.createElement('li');
        padre.appendChild(lista);

        // título
        let titulo = document.createElement('h1');
        titulo.innerText = elemento.name;
        lista.appendChild(titulo);

        // casilla de precio por unidad
        let precio = document.createElement('p');
        precio.innerText = `precio ${elemento.price}€`;
        lista.appendChild(precio);

        // casilla (editable) de cantidad
        // cantidad: <input type="text" placeholder="Cantidad" value="${elemento.quantity}">
        let casilla_cantidad = document.createElement('input');
        casilla_cantidad.id = i;
        casilla_cantidad.placeholder = "Cantidad";
        casilla_cantidad.value = elemento.quantity;
        lista.appendChild(casilla_cantidad);
        casilla_cantidad.addEventListener('change', listener_input_cantidad);

        // casilla precio final
        let precio_total = document.createElement('p');
        precio_total.innerText = ` ${(elemento.price * elemento.quantity).toFixed(2)}€`;
        lista.appendChild(precio_total);

        // botón eliminar
        let boton_eliminar = document.createElement('button');
        boton_eliminar.id = i;
        boton_eliminar.innerText = "Eliminar";
        lista.appendChild(boton_eliminar);
        boton_eliminar.addEventListener('click', listener_boton_eliminar);
    }
}

// To - do
function listener_boton_eliminar(evento_boton) {
    let id_boton = evento_boton.explicitOriginalTarget.id;

    console.log("ID botón: ", id_boton );
}

// To - do
function listener_input_cantidad(evento_input) {
    let id_input = evento_input.explicitOriginalTarget.id;

    console.log("Input box: ", id_input );
}



// To - do
function add_productos_stock(arr_productos_stock, producto) {
}

// To - do
function remove_productos_stock(arr_productos_stock) {
}
