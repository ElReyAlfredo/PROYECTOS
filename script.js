class Inventario {
  constructor() {
    this.producto = new Array();
  }

  agregar(nuevo) {
    this.producto.push(nuevo);
  }

  eliminar(codigo) {
    if (this.buscar(codigo) != null) {
      for (let i = 0; i < this.producto.length; i++) {
        if (this.producto[i].codigo == codigo) {
          for (let j = i; j < this.producto.length - 1; j++) {
            this.producto[j] = this.producto[j + 1];
          }
        }
      }
      this.producto.pop();
    } else {
      return null;
    }
  }

  listado() {
    let lista = "";
    let contador = 0;
    this.producto.forEach((producto) => {
      lista += this.producto[contador].getInfo() + "\n";
      contador++;
    });
    return `LISTA: \n${lista}`;
  }

  listadoInverso() {
    let lista = "";
    for (let i = this.producto.length - 1; i >= 0; i--) {
      lista += this.producto[i].getInfo() + "\n";
    }
    return `                LISTA INVERSA
          \n${lista}`;
  }

  buscar(codigo) {
    for (let i = 0; i < this.producto.length; i++) {
      if (this.producto[i].codigo === codigo) {
        return this.producto[i];
      } else {
        return null;
      }
    }
  }
}

class Producto {
  constructor(nombre, codigo, cantidad, costo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.costo = costo;
  }

  getInfo() {
    return `Nombre: ${this.nombre} || Codigo: ${this.codigo} || Costo: ${this.costo} || Cantidad: ${this.cantidad}`;
  }
}

const inventario = new Inventario();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
  const codigo = document.getElementById("txtCodigo").value;
  const nombre = document.getElementById("txtNombre").value;
  const cantidad = document.getElementById("txtCantidad").value;
  const costo = document.getElementById("txtCosto").value;
  const producto = new Producto(nombre, codigo, cantidad, costo);
  inventario.agregar(producto);
  alert("El producto fue agregado");
});

const btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", () => {
  alert(inventario.listado());
});

const btnListarInverso = document.getElementById("btnListarInverso");
btnListarInverso.addEventListener("click", () => {
  alert(inventario.listadoInverso());
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", () => {
  const codigo = document.getElementById("txtCodigo").value;
  const producto = inventario.buscar(codigo);
  alert(producto.getInfo());
});

const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", () => {
  const codigo = document.getElementById("txtCodigo").value;
  inventario.eliminar(codigo);
  alert("Producto borrado");
});
