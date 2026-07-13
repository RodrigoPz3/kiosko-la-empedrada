const buscador = document.getElementById("barraBusqueda");
const sugerencias = document.getElementById("sugerencias");
const contenedor = document.getElementById("productos");
const categorias = document.querySelectorAll(".categorias li");

function mostrarProductos(listaProductos){
    contenedor.innerHTML = "";
    listaProductos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="tarjeta-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio.toFixed(2)}</p>
                <button class="${producto.disponible ? 'btn-disponible' : 'btn-agotado'}" disabled>
                    ${producto.disponible ? 'Disponible' : 'Agotado'}
                </button>
            </div>
        `;
    });
}

buscador.addEventListener("input",()=>{
    const texto = buscador.value.toLowerCase();
    sugerencias.innerHTML="";
    if(texto===""){
        mostrarProductos(productos);
        return;
    }
    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );
    resultados.forEach(producto=>{
        sugerencias.innerHTML += `
            <div class="sugerencia">
                ${producto.nombre}
            </div>
        `;
    });
    document.querySelectorAll(".sugerencia").forEach((elemento,index)=>{
        elemento.addEventListener("click",()=>{
            mostrarProductos([resultados[index]]);
            sugerencias.innerHTML="";
            buscador.value=resultados[index].nombre;
        });
    });
});

// Mostrar todos al iniciar
mostrarProductos(productos);

// Filtrar por categoría
categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        categorias.forEach(c => c.classList.remove("activa"));
        categoria.classList.add("activa");
        const categoriaSeleccionada = categoria.dataset.categoria;
        if(categoriaSeleccionada === "Todos"){
            mostrarProductos(productos);
            return;
        }
        const productosFiltrados = productos.filter(producto =>
            producto.categoria === categoriaSeleccionada
        );
        mostrarProductos(productosFiltrados);
    });
});

productos.forEach((producto, index) => {
    producto.id = index + 1;
});

categorias[0].classList.add("activa");