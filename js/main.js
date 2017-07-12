var productos = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra, cantidad) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);
  this.cantidad = parseInt(cantidad);
};

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += 'Cantidad: ' + this.cantidad + '<br>';
  html += '<br><br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
   //se hizo cambio en el formato del prompt
var addCompra = document.getElementById('nuevacompra');
addCompra.onclick = function() {
  //var compra = prompt('Ingrese su nueva compra');

  //var cantidad = prompt('Ingrese la cantidad');

  swal({
            title: "¿Que desea comprar?",
            text: "Ingrese el nombre del producto a comprar",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        },
            function(inputValue){
              if (inputValue === false) return false;

              if (inputValue === "") {
                  swal.showInputError("Debes ingresar un producto");
                  return false
              }
            var compra = inputValue;

                  
            swal({
                  title: "¿Cuánto desea comprar?",
                  text: "Ingrese la cantidad a comprar",
                  type: "input",
                  showCancelButton: true,
                  closeOnConfirm: false,
                  animation: "slide-from-top",
                  inputPlaceholder: "Write something"
                },
                  function(inputValue){
                    if (inputValue === false) return false;

                    if (inputValue === "") {
                      swal.showInputError("Debes ingresar un número");
                      return false
                    }
                    var cantidad = inputValue;
                  
                       
                swal("Perfecto", "Escribiste: " + cantidad + " "+ compra, "success");
                var product  = new Producto (compra, cantidad);
                productos.push(product);
                printHTML(product.toHTML());
              
              });              
      });
};


// al hacerle click a mostrar todas las compras, imprime todas las compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}
