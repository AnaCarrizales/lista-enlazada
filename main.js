import Product from "./product.js";
import Inventario2 from "./inventary2.js";
import Acciones from "./acciones.js";
class App {
  constructor() 
  {
    this.btnNav = document.getElementById("btnNav");
    this.btnNav.addEventListener("click", this.buscar);

    this.btnRegistrar = document.getElementById("btnRegistrar");
    this.btnRegistrar.addEventListener("click", this.agregar);

    this.list = document.getElementById("btnListar");
    this.listInverse = document.getElementById("btnListarInverso");

    this.btnInsertar = document.getElementById("btnInsertar");

    this.list.addEventListener("click", this.listar);
    this.listInverse.addEventListener("click", this.listarInvertido);

    this.btnInsertar.addEventListener("click", this.insertar);

    this.listaEnlazada = new Inventario2();
    this.divTable = document.getElementById("forTable");
    this.divActions = document.getElementById("acciones");
    this.btnEliminar = document.getElementById("btnEliminar");
    this.btnEliminar.addEventListener("click", this.eliminar);
  }

  buscar = () => {
    let id = document.getElementById("id").value;
    let uxBw = new Acciones(this.divTable, this.divActions, this.listaEnlazada);
    let bwProduct = this.listaEnlazada.nav(id);
    if (bwProduct !== null) 
    {
      uxBw.acciones(`El producto ${bwProduct.getNombre()} existe`);
    }
  };
  
  agregar = () => {
    let uxAdd = new Acciones(this.divTable, this.divActions, this.listaEnlazada);
    let producto = this.crear();
    if (producto === null) 
    {
      uxAdd.acciones("No se ha registrado el producto, faltan datos por llenar ");
      return null;
    }
    let added = this.listaEnlazada.agregar(producto);
    if (added !== null) 
    {
      uxAdd.acciones(`El producto ${producto.getNombre()} se ha agregado `);
    } 
    else if (added === null) 
    {
      uxAdd.acciones(`El producto ${producto.getNombre()} no se ha agregado porque ya existe `);
    }
  };

  crear = () => {
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    if (id && nombre && cantidad && costo) 
    {
      var producto = new Product(id, nombre, cantidad, costo);
      return producto;
    }
    return null;
  };

  insertar = () => {
    let inserted = false;
    let product = this.crear();
    let pos = document.getElementById("insertValue").value;
    console.log(product)
    if (product !== null) {
      inserted = this.listaEnlazada.insertProductAt(product, pos);
    }
    if (product == null) {
      alert("Debes ingresar un producto para poder insertarlo");
    }
    if (inserted) {
      let uxInsert = new Ux(this.divTable, this.divActions, this.listaEnlazada);
      uxInsert.tellActions(
        `Se inserto el producto ${product.getNombre()} en la posición ${pos} correctamente`
      );
    }
  };

  eliminar = () => {
    let uxDelete = new Acciones(this.divTable, this.divActions, this.inventary);
    let idToDelete = document.getElementById("id").value;
    let pass = this.listaEnlazada.removeById(idToDelete);
    if (pass == null) {
      uxDelete.acciones(" No ha sido ingresado un id de producto ");
      return null;
    } 
    else if (pass == false) 
    {
      uxDelete.acciones(` el ID ${idToDelete} no existe `);
      return false;
    }
    uxDelete.acciones(` el producto ${pass.getNombre()} con id ${pass.getId()} ha sido eliminado correctamente `);
  };

  listar = () => {
    let uxList = new Acciones(this.divTable, this.divActions, this.listaEnlazada);
    uxList.listing();
  };

  listarInvertido = () => {
    let uxListInverse = new Acciones(this.divTable,this.divActions,this.inventary.getArray());
    uxListInverse.listInverse();
  };
}

new App();
