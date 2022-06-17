const {io} = require('../index');
const Bandas=require('../models/bandas')
const Banda=require('../models/banda')


const bandass= new Bandas();
bandass.addBanda(new Banda('Linkin Park'));
bandass.addBanda(new Banda('Metalica'));
bandass.addBanda(new Banda('Queen'));
bandass.addBanda(new Banda('bon jovi'));
bandass.addBanda(new Banda('punk'));


//console.log(bandass);






//Socket messaje 
io.on('connection',client =>{
    console.log('Cliente conectado');
    client.emit('bandas-registradas',bandass.getBandas());

    client.on('disconnect',()=>{
        console.log('Cliente desconectado');
    })

    client.on('mensaje',(payload)=>{
        console.log('Mensaje',payload);
        io.emit('mensaje',{admin:'nuevo mensaje'})
    })

    // client.on('emitir-mensaje',(payload)=>{
    //     //console.log(payload)
    //     //io.emit('nuevo-mensaje',payload) //emite a todos incluido el que envio
    //     client.broadcast.emit('nuevo-mensaje',payload)
    // })
    
    //votos de bandas
    client.on('votar-banda',(payload)=>{
       //console.log(payload)
      bandass.voteBandas(payload.id);
      //enviamos con io para  se actualice a todos inclusive a uien mando 
      io.emit('bandas-registradas',bandass.getBandas());
    })
    //agregar bandas 
    client.on('nueva-banda',(payload)=>{
        console.log(payload)
        bandass.addBanda(new Banda(payload.name))
    //    //enviamos con io para  se actualice a todos inclusive a uien mando 
        io.emit('bandas-registradas',bandass.getBandas());
     });
     //eliminar banda 
     client.on('eliminar-banda',(payload)=>{
        //console.log(payload)
       bandass.deleteBanda(payload.id);
       //enviamos con io para  se actualice a todos inclusive a uien mando 
       io.emit('bandas-registradas',bandass.getBandas());
     })

   


});




