
class employee{
    constructor(name, id){
        this._name = name;
        this._id= id;
    } 
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get id(){
        return this._id;
    }
    set id(newId){
        return this._id = newId;
    }
}

class ProductionWorker extends employee{
    constructor(name, id, sn, hpr){
        super(name, id);
        this._sn = sn;
        this._hpr = hpr;
    }
    get sn(){
        return this._sn;
    }
    get hpr(){
        return this._hpr;
    }

}


function sendText() {
    let id=parseInt(document.getElementById("id").value);
    let name=(document.getElementById("name").value);
    let sn=parseInt(document.getElementById("sn").value);
    let hpr=parseInt(document.getElementById("hpr").value);
    PW = new ProductionWorker(name, id, sn, hpr);
   document.getElementById("pname").innerHTML= PW.name;
   document.getElementById("in").innerHTML= PW.id;
   document.getElementById("shift").innerHTML= PW.sn;
   console.log(PW.hpr);
   document.getElementById("hpr2").innerHTML= PW.hpr;
}

