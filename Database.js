'use strict';

class Element {
    constructor(_name, _level, _paid){
        this.name = _name;
        this.level = parseInt(_level);
        this.paid = _paid;
    }
}

class Database {
    constructor(){
        this.elements = [];
        this.init();
    }

    init(){
        this.insertElement("Damian", 99, true);
    }

    insertElement(_name, _level, _paid){
        if( Object.prototype.toString.call(_name) == "[object String]" &&
            Object.prototype.toString.call(_level) == "[object Number]" &&
            Object.prototype.toString.call(_paid) == "[object Boolean]"){
            this.elements.push(new Element(_name,_level,_paid));
            return true;
        } else {
            return false;
        }
    }

    get(){
        return this.elements;
    }

    reset(){
      this.elements = [];
      this.init();
    }


    insert(array){

        var elements = [];

        for(var i=0; i < array.length; i++){
            if(array[i].name != undefined && array[i].level != undefined && array[i].paid  != undefined){
                if(!this.insertElement(array[i].name, array[i].level, array[i].paid)){
                    elements.push(array[i]);
                }
            } else {
                elements.push(array[i]);
            }
        }

        return elements;
    }
}

module.exports = new Database();
