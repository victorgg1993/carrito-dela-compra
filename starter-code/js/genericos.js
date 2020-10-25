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

// Done
function pintar_article(titulo, id_ul, id_articulo) {
    let objeto_body = document.querySelector('body');
    let objeto_article = document.createElement('article');
    objeto_article.id = 'article_' + id_articulo;

    let _h1 = document.createElement('h1');
    _h1.innerText = titulo;
    objeto_article.appendChild(_h1);

    let seccion = document.createElement('section');
    seccion.id = 'section_' + id_articulo;
    objeto_article.appendChild(seccion);

    let _ul = document.createElement('ul');
    _ul.id = id_ul;
    seccion.appendChild(_ul);

    objeto_body.appendChild(objeto_article);
}

// To - do ( los usará el vendedor y el manager para ordenar los productos)
function sort_producto() {

}
