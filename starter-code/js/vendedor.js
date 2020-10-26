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
            lstn_btn: listener_boton_eliminar_producto_stock
        };

        pintar_li_producto_stock(datos);
    }

    // <li> añadir nuevo producto

    let art_padre = document.getElementById('section_vendedor');
    let padre2 = document.createElement('ul');
    padre2.id = "ul_producto_stock_add";
    art_padre.appendChild(padre2);

    let datos = { // con esta estructura de datos solamente pasamos un parámetro, es más flexible
        padre: padre2,
        elemento: { name: "nombre producto", price: 0, quantity: 0 },
        texto_btn: "Añadir",
        id: 0,
        lstn_in: listener_input_cantidad_add,
        lstn_btn: listener_add_producto_stock
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
            casilla_nombre.id = 'input_nombre_producto_' + datos.id;
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
            in_precio.id = ("input_precio_" + datos.id);
            in_precio.addEventListener('change', datos.lstn_in);
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

    if (datos.texto_btn == 'Eliminar') {
        nombre_cantidad.id = ("label_cantidad_" + datos.id);
    } else {
        nombre_cantidad.id = ("label_cantidad_add_" + datos.id);
    }
    lista.appendChild(nombre_cantidad);

    // casilla (editable) de cantidad
    let casilla_cantidad = document.createElement('input');

    if (datos.texto_btn == 'Eliminar') {
        casilla_cantidad.id = ("input_cantidad_" + datos.id);
    } else {
        casilla_cantidad.id = ("input_cantidad_add_" + datos.id);
    }
    casilla_cantidad.placeholder = "Cantidad";

    if (datos.texto_btn == 'Eliminar') {
        casilla_cantidad.value = datos.elemento.quantity;
    }
    lista.appendChild(casilla_cantidad);
    casilla_cantidad.addEventListener('change', datos.lstn_in);


    // casilla precio final
    let precio_total = document.createElement('p');
    precio_total.innerText = `Total: ${(datos.elemento.price * datos.elemento.quantity).toFixed(2)}€`;

    if (datos.texto_btn == 'Eliminar') {
        precio_total.id = ("p_total_" + datos.id);
    } else {
        precio_total.id = ("p_add_" + datos.id);
    }

    lista.appendChild(precio_total);

    // botón eliminar
    let boton_add_o_eliminar = document.createElement('button');

    if (datos.texto_btn == 'Eliminar') {
        boton_add_o_eliminar.id = ("button_eliminar_" + datos.id);
    } else {
        boton_add_o_eliminar.id = ("button_add_" + datos.id);
    }
    boton_add_o_eliminar.innerText = datos.texto_btn;
    lista.appendChild(boton_add_o_eliminar);
    boton_add_o_eliminar.addEventListener('click', datos.lstn_btn);
}

// Done
function listener_input_cantidad_add() {
    let obj_p = document.getElementById("p_add_0");
    let obj_in_precio = document.getElementById("input_precio_0");
    let obj_in_cantidad = document.getElementById("input_cantidad_add_0");
    obj_p.innerText = "Total: " + ((obj_in_precio.value * obj_in_cantidad.value).toFixed(2) + "€");
}

// To - do
function listener_add_producto_stock() {

    let padre = document.getElementById('ul_productos_stock');
    let object = leer_producto_stock();
    if (object != false) {
        add_producto_stock(objeto_JSON, object);

        let datos = { // añadir un elemento <li> en el padre <ul>
            padre: padre,
            elemento: object,
            id: padre.childElementCount,
            texto_btn: "Eliminar",
            lstn_in: listener_input_cantidad,
            lstn_btn: listener_boton_eliminar_producto_stock
        };

        pintar_li_producto_stock(datos);
    }
}

// To - do
function listener_boton_eliminar_producto_stock(evento_boton) {
    let id_boton = evento_boton.explicitOriginalTarget.id;
    id_boton = id_boton.replace(/^\D+/g, '');
    document.getElementById(`li_producto_stock_${id_boton}`).remove(); // rm <li>
    objeto_JSON.splice(id_boton, 1);
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
function leer_producto_stock() {
    let nombre_producto = document.getElementById("input_nombre_producto_0").value;
    let precio_producto = document.getElementById("input_precio_0").value;
    let cantidad_producto = document.getElementById("input_cantidad_add_0").value;

    if (nombre_producto == "" || precio_producto == "" || cantidad_producto == "") {
        alert("Hay un campo vacio");
        return false;
    } else {
        return {
            name: nombre_producto,
            price: parseFloat(precio_producto),
            quantity: parseInt(cantidad_producto),
            index: objeto_JSON.length,
        };
    }
}

// To - do
function add_producto_stock(arr_productos_stock, producto) {
    arr_productos_stock.push(producto);
}

// To - do
function remove_producto_stock(arr_productos_stock) {

}