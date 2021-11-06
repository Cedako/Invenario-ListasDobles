export default class Inventario{
    constructor(table){
        this._inicio = null
        this._table = table
    }

    //añadir producto a la lista
    add(product){
        let count = this._count()
        let pos = this._find(product);
        if(pos == null && count<20){
            if (this._inicio==null){
                this._inicio=product;
                console.log(this._inicio);
                return true;
            } else {
                let aux=this._inicio;
                while(aux._siguiente!=null){
                    if(aux._siguiente.getId() > aux.getId()){
                        let aux2 = aux._siguiente
                        aux._siguiente=product;
                        aux._siguiente._siguiente = aux2
                        aux._siguiente._anterior = aux;
                        aux2._anterior = aux._siguiente
                        console.log(this._inicio);
                        return true;
                    }
                    aux=aux._siguiente;
                }
                aux._siguiente=product;
                aux._siguiente._anterior = aux;
                console.log(this._inicio);
                return true;
                
            }
        } else {
            return false;
        }
    }

    //Contar objetos en la lista
    _count(){
        let numObj = 1
        let temp = this._inicio
        while(temp != null){
            numObj++
            temp = temp._siguiente
        }
        console.log(numObj)
        return numObj;
    }
    //Encontrar el producto en la lista
    _find(product){
        let temp = this._inicio
        while(temp!=null){
            if(temp._id == product.getId()){
                return temp
            }
            temp = temp._siguiente
        }
        return null;
    }

    showAll(){
        this._table.innerHTML = "";
        let aux = this._inicio;
        while (aux!==null){
            let row = this._table.insertRow(-1);

            let col = row.insertCell(0);

            col.innerHTML = aux.getInfo()
            aux=aux._siguiente
        }
    }
    showInverse(){
        this._table.innerHTML = "";
        let aux = this._inicio;
        while (aux!==null){
            let row = this._table.insertRow(0);

            let col = row.insertCell(0);

            col.innerHTML = aux.getInfo();
            aux=aux._siguiente
        }
    }
    search(inId){
        this._table.innerHTML="";
        let tempo = this._inicio;
        while(tempo!==null){
            if(tempo._id == inId.value){
                this._table.innerHTML=tempo.getInfo()
                return tempo
            } else {
                tempo = tempo._siguiente
            }
        }
        return null;
    }
    delete(inId){
        let search = this.search(inId)
        if(search == null){
            return null
        }
        else {
            let del = null;
        if (inId.value==this._inicio._id){
            del = this._inicio
            this._inicio = this._inicio._siguiente
            this._inicio._anterior = null
            del._siguiente = null
            return del;
        }
        let temp=this._inicio;
        while(temp != null){
        if (temp._id==inId.value)
        {
            del=temp;
            temp._anterior._siguiente=del._siguiente;
            if(temp._siguiente !== null){
                temp._siguiente._anterior=temp._anterior;
            }
            del._siguiente=null;
            del._anterior=null;
            console.log(this._inicio)
            return del;
        } else
            temp=temp._siguiente;
        }
        return del;
        }
    }
}