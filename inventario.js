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
                while(aux._siguiente!=null)
                    aux=aux._siguiente;
                aux._siguiente=product;
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

            col.innerHTML = aux._info
            aux=aux._siguiente
        }
    }
    showInverse(){
        this._table.innerHTML = "";
        let aux = this._inicio;
        while (aux!==null){
            let row = this._table.insertRow(0);

            let col = row.insertCell(0);

            col.innerHTML = aux._info
            aux=aux._siguiente
        }
    }
    search(inId){
        this._table.innerHTML="";
        let tempo = this._inicio;
        while(tempo!==null){
            if(tempo._id == inId.value){
                this._table.innerHTML=tempo._info
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
            del._siguiente = null
            return del;
        }
        let temp=this._inicio;
        while(temp._siguiente != null ){
        if (temp._siguiente._id==inId.value)
        {
            del=temp._siguiente;
            temp._siguiente=temp._siguiente._siguiente;
            del._siguiente=null;
            return del;
        } else
            temp=temp._siguiente;
        }
        return del;
        }
    }
    addProductPosition(product,inPos){
        let prdCount = this._count()
        let search = this._find(product)
        if(search == null && prdCount<20 && prdCount>inPos.value){
            let count = 1;
            let newProduct = false;
        if (inPos.value==1){
            newProduct = this._inicio
            this._inicio = product
            product._siguiente = newProduct
            return true;
        }
        let temp=this._inicio;
        while(count !== inPos ){
            console.log(count)
        if ((count)+1 == inPos.value)
        {
            newProduct=temp._siguiente;
            temp._siguiente=product;
            product._siguiente = newProduct
            return true;
        }else if(!temp){
            return false
        } else {
            count++
            temp=temp._siguiente;
        }
        }
        return newProduct;
        }
        else {
            return false
        }
    }
}