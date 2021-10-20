export default class Inventary2 
{
    constructor() 
    {
      this.top = null;
      this.size = 0;
    }

    agregar(objeto)
    {
      if (this.noRepeatId(objeto.getId()) == null) 
      {
        return null;
      }
      if (!this.top) 
      {
        this.top = objeto;
      } 
      else 
      {
        this._addRec(objeto, this.top);
      }
      this.size++;
    }
  
    _addRec(nuevo, actual) 
    {
      if (actual.siguiente == null) 
      {
        actual.siguiente = nuevo;
      } 
      else 
      {
        this._addRec(nuevo, actual.siguiente);
      }
    }

    noRepeatId(id) 
    {
      id = Number(id);
      let actual = this.top;
      let info = "";
      while (actual != null) 
      {
        info = actual;
        if (info.getId() === id) 
        {
          return null;
        }
        actual = actual.siguiente;
      }
      return true;
    }

    insertProductAt(producto, indice) 
    {
      if (this.noRepeatId(producto.getId()) == null) 
      {
        return null;
      }
      if (indice < 0 || indice > this.size) 
      {
        return null;
      }

      let actual = this.top;
      let ant;
      if (indice == 0) 
      {
        producto.siguiente = actual;
        this.top = producto;
        return;
      } 
      else
      {
        let i = 0;
        for (let i = 0; i < indice; i++) 
        {
          ant = actual;
          actual = actual.siguiente;
        }
        producto.siguiente = actual;
        ant.siguiente = producto;
      }
      this.size++;
    }
  
    getLinkedList() 
    {
      return this.top;
    }

    removeById(id) 
    {
      id = Number(id);
      let actual = this.top;
      let ant = null;
      while (actual !== null) 
      {
        if (actual.getId() === id) 
        {
          if (!ant) 
          {
            this.top = actual.siguiente;
          } 
          else 
          {
            ant.siguiente = actual.siguiente;
          }
          this.size--;
          return actual;
        }
        ant = actual;
        actual = actual.siguiente;
      }
      return null;
    }

    borrarDesde(indice) 
    {
      if (indice < 0 || indice > this.size) 
      {
        return null;
      }

      let actual = this.top;
      let ant = null;
  
      if (indice === 0) 
      {
        this.top = actual.siguiente;
      } 
      else 
      {
        for (let i = 0; i < indice; i++) 
        {
          ant = actual;
          actual = actual.siguiente;
        }
        ant.siguiente = actual.siguiente;
      }
      this.size--;
      return actual;
    }

    nav(id) 
    {
      if (!this.top) 
      {
        return null;
      }
      let actual = this.top;
      while (actual !== null) 
      {
        if (actual.getId() == id) return actual;
        actual = actual.siguiente;
      }
      return null;
    }
}
  