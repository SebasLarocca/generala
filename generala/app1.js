
let arr                 = [],
    arrSeleccionados    = [];

class Jugada {

    seleccionDados = () => { 
        const   dado1 =                     document.querySelector("#dadoNumero1"),
                dado2 =                     document.querySelector("#dadoNumero2"),
                dado4 =                     document.querySelector("#dadoNumero4"),
                dado5 =                     document.querySelector("#dadoNumero0"),
                dado3 =                     document.querySelector("#dadoNumero3"),
                htmlDadosSeleccionados =    document.querySelector( "#containerSeleccionados" );

        //Aca van los addEventListener

        ( dado1 ) ? dado1.addEventListener("click", ()=>{   arrSeleccionados.push( arr[1] );
                                                arr.splice(1,1, null);
                                                console.log({arr}, {arrSeleccionados});
                                                dado1.remove();
                                                console.log( arrSeleccionados[arrSeleccionados.length-1] )
                                                htmlDadosSeleccionados.innerHTML+= `<img  id="dadoSeleccNumero${1}" src="./imgs/${arrSeleccionados[arrSeleccionados.length-1]}.jpg">`

                                                }) : "";

        ( dado2 ) ? dado2.addEventListener("click", ()=>{   arrSeleccionados.push( arr[2] );
                                                arr.splice(2,1, null);
                                                console.log({arr}, {arrSeleccionados}); 
                                                dado2.remove();
                                                console.log( arrSeleccionados[arrSeleccionados.length-1] )
                                                htmlDadosSeleccionados.innerHTML+= `<img  id="dadoSeleccNumero${2}" src="./imgs/${arrSeleccionados[arrSeleccionados.length-1]}.jpg">`

                                                
                                                }) : "";
        
        ( dado3 ) ? dado3.addEventListener("click", ()=>{   arrSeleccionados.push( arr[3] );
                                                arr.splice(3,1, null);
                                                console.log({arr}, {arrSeleccionados}); 
                                                dado3.remove();
                                                console.log( arrSeleccionados[arrSeleccionados.length-1] )
                                                htmlDadosSeleccionados.innerHTML+= `<img  id="dadoSeleccNumero${3}" src="./imgs/${ arrSeleccionados[arrSeleccionados.length-1] }.jpg">`
                                                }) : "";

        ( dado4 ) ? dado4.addEventListener("click", ()=>{   arrSeleccionados.push( arr[4] );
                                                arr.splice(4,1, null);
                                                console.log({arr}, {arrSeleccionados}); 
                                                dado4.remove();
                                                console.log( arrSeleccionados[arrSeleccionados.length-1] )
                                                htmlDadosSeleccionados.innerHTML+= `<img  id="dadoSeleccNumero${4}" src="./imgs/${ arrSeleccionados[arrSeleccionados.length-1] }.jpg">`
                                                }) : "";
        
        ( dado5 ) ? dado5.addEventListener("click", ()=>{   arrSeleccionados.push( arr[0] );
                                                arr.splice(0,1, null);
                                                console.log({arr}, {arrSeleccionados}); 
                                                dado5.remove();
                                                console.log( arrSeleccionados[arrSeleccionados.length-1] )
                                                htmlDadosSeleccionados.innerHTML+= `<img  id="dadoSeleccNumero${0}" src="./imgs/${arrSeleccionados[arrSeleccionados.length-1]}.jpg">` 
                                                }) : "";
     }

    //Genera el arreglo con los 6 dados random del primer tiro 
    primerTiro = (numeroDados) => {

        for (let i = 1; i <= numeroDados; i++) {

            const dado = Math.floor(Math.random() * (6 - 1 + 1) + 1) ;
            arr.push(dado);
        
        }
        
        //Muestra los dados en pantalla
        const imgDado = document.querySelector('#imgsDados');
        for (let i = 0; i < arr.length; i++) {
            
            imgDado.innerHTML+= `<img id="dadoNumero${i}" src="./imgs/${arr[i]}.jpg">`

        }

        //Aca estaba lo que puse en seleccionDados
        this.seleccionDados();
        

        numeroTiros = numeroTiros + 1;
        console.log(arr);
        console.log( numeroTiros );
        const mensaje = "tira de nuevo";
        console.log( mensaje );

    }

    //Toma el arreglo del primer tiro y le quita un dado (el elegido) 
    proximosTiros = ( dadosRestantes ) => {
        
        arr = []
        for (let i = 1; i <= dadosRestantes; i++) {

            const dado = Math.floor(Math.random() * (6 - 1 + 1) + 1) ;
            arr.push(dado);
        
        }

        //Muestra los dados en pantalla
        const imgDado = document.querySelector('#imgsDados');
        imgDado.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            
            imgDado.innerHTML+= `<img id="dadoNumero${i}" src="./imgs/${arr[i]}.jpg">`

        }

        this.seleccionDados();
        console.log( arr );
        
        
        numeroTiros = numeroTiros + 1;
        const mensaje = (numeroTiros >= 3) ? "no te quedan mas tiros" : "tira de nuevo";
        const btnDesact = (numeroTiros >= 3) ? btnTirarDados.setAttribute("disabled", "true") : "";
        console.log( mensaje );
        
        }
    
    siguienteJugador = ()=>{


        arr = [];
        arrSeleccionados = [];
        const   imgDado = document.querySelector('#imgsDados'),
                htmlDadosSeleccionados = document.querySelector('#containerSeleccionados')
        
        btnTirarDados.removeAttribute("disabled");
        htmlDadosSeleccionados.innerHTML = '';
        imgDado.innerHTML = '';
        numeroTiros = 0;
        console.log(arr)
        console.log(arrSeleccionados)


    }

};

const jugada1 = new Jugada

const   btnTirarDados     = document.querySelector('#tirarDados'),
        btnProxJugador    = document.querySelector('#proxJugador');

let numeroTiros = 0;

btnTirarDados.addEventListener("click", ()=>{
    
    ( numeroTiros === 0 ) ? jugada1.primerTiro(5) : jugada1.proximosTiros(5 - arrSeleccionados.length)});

btnProxJugador.addEventListener("click", ()=>{
    jugada1.siguienteJugador();
});

