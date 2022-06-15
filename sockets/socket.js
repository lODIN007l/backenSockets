const {io} = require('../index');

//Socket messaje 
io.on('connection',client =>{
    console.log('Cliente conectado');


    client.on('disconnect',()=>{
        console.log('Cliente desconectado');
    })

    client.on('mensaje',(payload)=>{
        console.log('Mensaje',payload);
        io.emit('mensaje',{admin:'nuevo mensaje'})
    })

    client.on('emitir-mensaje',(payload)=>{
        //console.log(payload)
        //io.emit('nuevo-mensaje',payload) //emite a todos incluido el que envio
        client.broadcast.emit('nuevo-mensaje',payload)
    })
   


});




