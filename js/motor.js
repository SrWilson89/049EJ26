class Cinesa3D{
    imagen;
    nombre;
    precio;
    descuento;
    
    plazas;
    texto;
    
    constructor( imagen, nombre, precio, descuento, plazas, texto){
        this.imagen=imagen;
        this.nombre=nombre;
        this.precio=precio;
        this.descuento=descuento;        
        this.plazas=plazas;
        this.texto=texto;
    }

    calculaTotal(){
        var total =this.precio*(this.descuento/100);
        return total;
    }

    reserva(){
        this.plazas=this.plazas-1;
    }

}

var Cine1 = new Cinesa3D(
    `img/cine01.jpg`,
    'Cinesa 3D',
    9,
    45,
    120,
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam velit, rem excepturi dolorem repellat rerum sunt nihil eligendi temporibus corrupti. Aperiam tenetur velit, deleniti maxime ducimus ipsa qui atque?');



function pintar(){
    document.getElementById('contenedor').innerHTML=""

    document.getElementById('contenedor').innerHTML+=`
    <div class="cupon">
            <img src="${Cine1.imagen}" alt="">
            <div class="datos">
                <h1>${Cine1.nombre}</h1>
                <p><span class="tachado">${Cine1.precio} €</span> <span class="total">${Cine1.calculaTotal()} €</span></p>
                <p>Solo nos quedan ${Cine1.plazas}</p>
                <p>${Cine1.descuento}% de descuento</p>
            </div>
            <div class="texto">
                <p>${Cine1.texto}</p>                
            </div>
            <div class="abajo">
                <button onclick="carrito()">
                    Añadir al carrito
                </button>
            </div>
        </div>
    `
}

pintar();

function carrito(){
    Cine1.reserva();
    pintar();
}
