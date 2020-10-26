

// To - do
function print_productos_ranking(arr_productos_tienda) {

    let arr_productos = [];
    let objeto_ul = document.getElementById('ul_productos_ranking');
    objeto_ul.innerHTML = ''; // limpiamos


    for (let i = 0; i < arr_productos_tienda.length; i++) {

        if (arr_productos_tienda[i].compras > 0) { // si se ha comprado alguno, lo ponemos en el ranking
            arr_productos.push(arr_productos_tienda[i]);
        }
    }


    arr_productos = arr_productos.sort( ( a,b ) =>  b.compras - a.compras );
    console.log("arr productos: ", arr_productos);

    for (let i = 0; i < arr_productos.length; i++) {

        let contenido_list = `<p> ${i + 1} : ${arr_productos[i].name}  cantidad:  ${arr_productos[i].compras}</p>`;
        print_elemento('ul_productos_ranking', 'li', `li_producto_ranking_${i}`, contenido_list);
    }

}


