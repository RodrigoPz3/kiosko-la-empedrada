const productos = [
    // BULDAK CARBONARA
    {
        nombre: "Buldak Ramen Carbonara 130gr 10pz",
        precio: 348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-carbonara-130gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Buldak Ramen Carbonara 130gr Caja Con 40pz",
        precio: 1348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-carbonara-130gr-40pz.webp",
        disponible: false
    },
    // BULDAK CREAM CARBONARA
    {
        nombre: "Buldak Ramen Cream Carbonara 140gr 10pz",
        precio: 348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-cream-carbonara-140gr-10pz.webp",
        disponible: false
    },
    {
        nombre: "Buldak Ramen Cream Carbonara 140gr Caja Con 40pz",
        precio: 1348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-cream-carbonara-140gr-40pz.webp",
        disponible: false
    },
    // BULDAK ORIGINAL
    {
        nombre: "Buldak Ramen Original 140gr 10pz",
        precio: 348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-original-140gr-10pz.webp",
        disponible: false
    },
    {
        nombre: "Buldak Ramen Original 140gr Caja Con 40pz",
        precio: 1348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-original-140gr-40pz.webp",
        disponible: false
    },
    // BULDAK 2X
    {
        nombre: "Buldak Ramen 2x 140gr 10pz",
        precio: 348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-2x-140gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Buldak Ramen 2x 140gr Caja Con 40pz",
        precio: 1348,
        categoria: "Sopas",
        imagen: "imagenes/productos/buldak-ramen-2x-140gr-40pz.webp",
        disponible: false
    },
    // CANTABILE CAFE VAINILLA
    {
        nombre: "Cantabile Cafe Vainilla 230ml 10pz",
        precio: 248,
        categoria: "Bebidas",
        imagen: "imagenes/productos/cantabile-cafe-230ml-10pz.webp",
        disponible: true
    },
    {
        nombre: "Cantabile Cafe Vainilla 230ml 50pz",
        precio: 1178,
        categoria: "Bebidas",
        imagen: "imagenes/productos/cantabile-cafe-230ml-50pz.webp",
        disponible: false
    },
    // CANTABILE SANDIA
    {
        nombre: "Cantabile Sandia 230ml 10pz",
        precio: 248,
        categoria: "Bebidas",
        imagen: "imagenes/productos/cantabile-sandia-230ml-10pz.webp",
        disponible: true
    },
    {
        nombre: "Cantabile Sandia 230ml 50pz",
        precio: 1178,
        categoria: "Bebidas",
        imagen: "imagenes/productos/cantabile-sandia-230ml-50pz.webp",
        disponible: false
    },
    // MOCHIS CACAHUATE
    {
        nombre: "Mochis Cacahuate 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-cacahuate-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Cacahuate 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-cacahuate-120gr-12pz.webp",
        disponible: false
    },
    // MOCHIS CARAMELO
    {
        nombre: "Mochis Caramelo 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-caramelo-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Caramelo 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-caramelo-120gr-12pz.webp",
        disponible: false
    },
    // MOCHIS CHOCOLATE
    {
        nombre: "Mochis Chocolate 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-chocolate-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Chocolate 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-chocolate-120gr-12pz.webp",
        disponible: false
    },
    // MOCHIS CHOCOMENTA
    {
        nombre: "Mochis Chocomenta 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-chocomenta-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Chocomenta 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-chocomenta-120gr-12pz.webp",
        disponible: false
    },
    // MOCHIS COCO
    {
        nombre: "Mochis Coco 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-coco-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Coco 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-coco-120gr-12pz.webp",
        disponible: false
    },
    // MOCHIS FRESA
    {
        nombre: "Mochis Fresa 120gr 5pz",
        precio: 244,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-fresa-120gr-5pz.webp",
        disponible: true
    },
    {
        nombre: "Mochis Fresa 120gr 12pz",
        precio: 568,
        categoria: "Dulces",
        imagen: "imagenes/productos/mochis-fresa-120gr-12pz.webp",
        disponible: false
    },
    // PEELERZ DURAZNO
    {
        nombre: "Peelerz Durazno 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-durazno-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Durazno 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-durazno-65gr-24pz.webp",
        disponible: false
    },
    // PEELERZ DURAZNO
    {
        nombre: "Peelerz Durazno 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-durazno-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Durazno 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-durazno-65gr-24pz.webp",
        disponible: true
    },
    // PEELERZ FRESA
    {
        nombre: "Peelerz Fresa 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-fresa-65gr-10pz.webp",
        disponible: false
    },
    {
        nombre: "Peelerz Fresa 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-fresa-65gr-24pz.webp",
        disponible: false
    },
    // PEELERZ MANGO
    {
        nombre: "Peelerz Mango 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-mango-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Mango 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-mango-65gr-24pz.webp",
        disponible: false
    },
    // PEELERZ PIÑA
    {
        nombre: "Peelerz Piña 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-piña-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Piña 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-piña-65gr-24pz.webp",
        disponible: false
    },
    // PEELERZ PLATANO
    {
        nombre: "Peelerz Platano 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-platano-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Platano 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-platano-65gr-24pz.webp",
        disponible: true
    },
    // PEELERZ UVA
    {
        nombre: "Peelerz Uva 65gr 10pz",
        precio: 378,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-uva-65gr-10pz.webp",
        disponible: true
    },
    {
        nombre: "Peelerz Uva 65gr 24pz",
        precio: 839,
        categoria: "Dulces",
        imagen: "imagenes/productos/peelerz-uva-65gr-24pz.webp",
        disponible: false
    },
];
