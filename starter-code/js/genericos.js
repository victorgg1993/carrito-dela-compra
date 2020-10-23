/*
    Si no sabes dónde poner una función, déjala aquí.
*/




// Pinta un elemento (hijo = li, por ejemplo)
// en el elemento padre ( padre = ul, por ejemplo )
// con el contenido que le das ( contenido = '<button>Soy un botón</button>')

function print_elemento(padre, hijo, contenido) { // acabará siendo borrado
    let objeto_padre = document.getElementById(padre);

    let objeto_hijo = document.createElement(hijo);
    objeto_hijo.innerHTML = contenido;
    objeto_padre.appendChild(objeto_hijo);
}


// To - do ( los usará el vendedor y el manager para ordenar los productos)
function sort_producto(){

}