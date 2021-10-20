export default class Acciones {
    constructor(divTable, divActions, listaEnlazada) 
    {
      this.div = divTable;
      this.divActions = divActions;
      this.listaEnlazada = listaEnlazada;
    }

    borrar() 
    {
      let tabla = document.getElementById("tbProducts");
      tabla.innerHTML =
        '<tr><th id="producto">Producto</th><th id="id">ID</th><th id="cantidad">Cantidad</th><th id="price">Precio</th><th id="totalPrice">$Total</th></tr>';
    }

    _mostrar(producto) 
    {
      if (producto) 
      {
        let tabla = document.getElementById("tbProducts");
        let row = tabla.insertRow(-1);
        let colNombre = row.insertCell(0);
        let colId = row.insertCell(1);
        let colCantidad = row.insertCell(2);
        let colCosto = row.insertCell(3);
        let colCostoTotal = row.insertCell(4);

        row.setAttribute("id", `row${producto.getId()}`);
        colNombre.setAttribute("id", `colNombre${producto.getId()}`);
        colId.setAttribute("id", `colId${producto.getId()}`);
        colCantidad.setAttribute("id", `colCantidad${producto.getId()}`);
        colCosto.setAttribute("id", `colCosto${producto.getId()}`);
        colCostoTotal.setAttribute("id", `colCostoTotal${producto.getId()}`);
  
        colNombre.innerHTML = producto.getNombre();
        colId.innerHTML = producto.getId();
        colCantidad.innerHTML = producto.getCantidad();
        colCosto.innerHTML = producto.getCosto();
        colCostoTotal.innerHTML = producto.getCostoTotal();
      }
    }

    listing() 
    {
      let listaEnlazada = this.listaEnlazada.getLinkedList();
      let info = "";
      this.borrar();
      while (listaEnlazada != null) {
        info = listaEnlazada;
        this._mostrar(info);
        listaEnlazada = listaEnlazada.siguiente;
      }
    }
  
    listInverse() {
      let listaEnlazada = this.listaEnlazada.getLinkedList();
      let info = "";
      this.borrar();
      while (listaEnlazada != null) 
      {
        info = listaEnlazada;
        this._mostrar(info);
        listaEnlazada = listaEnlazada.siguiente;
      }
    }

    acciones(acciones) 
    {
      this.divActions.innerHTML += `<label>${acciones}</label>`;
    }
}