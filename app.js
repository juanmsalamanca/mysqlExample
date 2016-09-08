/**
 * Created by juan on 07/09/2016.
 */
var express=require('express');
var app=express();



var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'54.213.81.66',
    user:'root',
    password:'1022952168',
    database:'sample'
});
var rowsDb = "";
conexion.connect(function (error){

    console.log(error);

    if (error){
        console.log('Problemas de conexion con mysql');
    } else {
        console.log('se inicio conexion');
        conexion.query('describe contacts', function(err, rows, fields){
            if (err) throw err;
            for(var p in rows){
                console.log('The solution is: ', rows[p].Field);
                rowsDb += rows[p].Field;
            }




        });
    }

});



app.get('/',function (req,res){
    res.send('<!doctype html><html><head></head><body><h1>'+
        'Mi primer pagina <br> '+rowsDb+' </h1></body></html>');
});

var server=app.listen(8080,function(){
    console.log('Servidor web iniciado');
});