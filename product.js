export default class Product 
{
    constructor(id, nombre, cantidad, costo) 
    {
      this.id = Number(id);
      this.nombre = nombre;
      this.cantidad = Number(cantidad);
      this.costo = Number(costo);
      this.valor = 0;
    }

    getId() 
    {
      return this.id;
    }

    getNombre() 
    {
      return this.nombre;
    }

    getCosto() 
    {
      return this.costo;
    }

    getCantidad() 
    {
      return this.cantidad;
    }

    getCostoTotal() 
    {
      this.valor = this.cantidad * this.costo;
      return this.valor;
    }
}
  