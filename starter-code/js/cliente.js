// To - do
function print_productos_tienda(arr_productos_tienda) {

    for (let i = 0; i < arr_productos_tienda.length; i++) {

        let contenido_list =
            `<h2>${arr_productos_tienda[i].name}</h2>
    <img src="" alt="imagen producto">
    <input onChange="listener_change_input_cantidad(event)" id="input_producto_${i}" type="number" value="1" min="1" max="${arr_productos_tienda[i].quantity}"></input>
    <p id="p_producto_disponible_${i}">${arr_productos_tienda[i].quantity} uds. disponibles</p>
    <p id="p_producto_${i}" class="p_precio_producto">precio: ${arr_productos_tienda[i].price}€</p>
    <button id="button_producto_${i}" onClick="add_productos_tienda(event)">Comprar</button>`;

        print_elemento('ul_productos_tienda', 'li', `li_producto_tienda_${i}`, contenido_list);
    }
}

// Done
function listener_change_input_cantidad(evento_input) {

    let indice = evento_input.target.id.replace(/^\D+/g, '');
    let obj_p = document.getElementById("p_producto_" + indice);
    let disponible = document.getElementById("p_producto_disponible_" + indice);
    let unidades = document.getElementById("input_producto_" + indice);

    disponible = disponible.textContent;
    disponible = parseInt(disponible[0] + disponible[1]);

    console.log("cantidad: ", disponible);

    let precio_total = (objeto_JSON[indice].price * unidades.value).toFixed(2);
    obj_p.innerText = `precio: ${precio_total}€`;
}

// To - do
function add_productos_tienda(evento_boton) {
    let indice = evento_boton.explicitOriginalTarget.id.replace(/^\D+/g, '');
    let input = document.getElementById("input_producto_" + indice);
    let disponible = document.getElementById("p_producto_disponible_" + indice);
    let obj_p = document.getElementById("p_producto_" + indice);

    console.log("disponible:", disponible);
    console.log("objeto_JSON[indice].quantity: ", objeto_JSON[indice].quantity);
    console.log("input_producto_0: ", input.value);

    if (input.value >= objeto_JSON[indice].quantity) {
        document.getElementById(`li_producto_tienda_${indice}`).remove(); // rm <li>
        objeto_JSON.splice(indice, 1);
    }
    else {
        // descontar
        objeto_JSON[indice].compras += parseInt(input.value);
        console.log("compras: ", objeto_JSON[indice].compras);

        objeto_JSON[indice].quantity -= input.value;
        disponible.textContent = `${objeto_JSON[indice].quantity} uds. disponibles`;
        disponible.value = objeto_JSON[indice].quantity;
        input_producto_0.value = 1;
        input_producto_0.max = objeto_JSON[indice].quantity;
        obj_p.innerText = `precio: ${objeto_JSON[indice].price}€`;
    }

    print_productos_ranking(objeto_JSON); // después de comprar, actualizamos el ranking
}


// To - do
function remove_productos_tienda(arr_productos_stock) {
}

// To - do
// function buy_producto() {
// }
