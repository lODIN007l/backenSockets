const Banda =require('./banda');


class Bandas{
    constructor(){
        this.bandas=[]

    }
    addBanda(bandObj= new Banda()){
        this.bandas.push(bandObj);
    }
    getBandas(){
        return this.bandas
    }

    deleteBanda(id=''){
        this.bandas=this.bandas.filter(bandObj=>bandObj.id!==id);
        return this.bandas
    }

    voteBandas(id=''){
        this.bandas+this.bandas.map(bandObj=>{
            if(bandObj.id===id){
                bandObj.votes++;
                return bandObj;
            }else{
                return bandObj;
            }
        })
    }

}

module.exports=Bandas;