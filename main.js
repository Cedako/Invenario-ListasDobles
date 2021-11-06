import Inventario from "./inventario.js"
import Producto from "./producto.js"

class App{
    constructor(){
        //declaracion de botones
       let btnAdd = document.querySelector("#btnAdd");
       let btnShowAll = document.querySelector("#showAll");
       let btnShowInverse = document.querySelector("#showInverse");
       let btnSrch = document.querySelector("#btnSrch");
       let btnDel = document.querySelector("#btnDel");
        //funcionalidad de botones
       btnAdd.addEventListener("click", this._addProduct)
       btnShowAll.addEventListener("click", this._showAll)
       btnShowInverse.addEventListener("click",this._showInverse)
       btnSrch.addEventListener("click",  this._search)
       btnDel.addEventListener("click", this._delete)

       this._table = document.querySelector("#table");
       this._inventario = new Inventario(this._table);
    }

    _showAll = () => {
        this._inventario.showAll()
    }
    _showInverse = () => {
        this._inventario.showInverse();
    }
    _search = () => {
        let inId = document.querySelector("#srchId");
        this._inventario.search(inId);
    }
    _delete = () => {
        let inId = document.querySelector("#delId");
        this._inventario.delete(inId);
    }

    _addProduct = () => {
        let product = this.readForm();

        if(!product){
            alert("Todos los campos son requeridos")
            return;
        }

        let added = this._inventario.add(product);

        if(added === false){
            alert("No se puede añadir el producto")
            return;
        }

        else if(added === true){
            alert("Se ha añadido el producto al inventario")
            return;
        }
    }

    readForm () {
        let inId = document.querySelector("#id");
        let inName = document.querySelector("#name");
        let inQuantity = document.querySelector("#quantity");
        let inCost = document.querySelector("#cost");

        let id = inId.value;
        let name = inName.value;
        let quantity = inQuantity.value;
        let cost = inCost.value;
        
        if(id && name && quantity && cost){
            inId.value = "";
            inName.value = "";
            inQuantity.value = "";
            inCost.value = "";

            return new Producto(id,name,quantity,cost);
        }
        else{
            return false;
        }
    }
    
}
new App;