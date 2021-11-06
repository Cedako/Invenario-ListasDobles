export default class Producto {
    constructor(id, name, quantity, cost){
        this._id = Number (id);
        this._name = name;
        this._quantity = Number(quantity);
        this._cost = Number(cost);
        this._siguiente = null;
        this._info = `${this._id}|${this._name}|${this._quantity}|${this._cost}|${this.getTotal()}`
    }
    
    getId(){
        return this._id;
    }
    getName(){
        return this._name;
    }
    getQuantity(){
        return this._quantity;
    }
    getCost(){
        return this._cost;
    }
    getTotal(){
        return this._quantity*this._cost;
    }
}