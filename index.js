const express=require('express');
const path=require('path')
const app= express();


//entrada publica -path
const publicPath = path.resolve(__dirname,'public')
app.use(express.static(publicPath))


app.listen(3000,(error)=>{
    if(error)throw new Error(error)
    console.log('Servidor corriedo en el puerto :',3000);
});