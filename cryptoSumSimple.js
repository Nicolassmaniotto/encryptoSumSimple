function encryptoSimple($msg, $key = "textotexte",separador = ":" ) {
    var msg = Buffer.from($msg,"utf8").toString("ascii");
    var key = Buffer.from($key,"utf8").toString("ascii");
    var comprimento =  msg.length;
    var parteTexto; //buffer pros bytes
    parteTexto = Buffer.from(msg,"ascii");
    var keyTamanho = key.length;
    var parteKey; //buffer pros bytes
    parteKey = Buffer.from(key,"ascii");
    var result = `${comprimento+1}`;
    var contKey = 0;
      
    for (var i = 0; i < comprimento; i++) {
        // console.log(typeof(parteTexto[i]))
        if(typeof(parteTexto[i]=="undefined")| (typeof(parteTexto[i]) != 'string' && typeof(parteTexto[i]) !="number")) {
            // console.log('aqui')
            break;
        }
        // console.log(contKey)
        // console.log(parseInt(parteKey[contKey]))
        // console.log(parseInt(parteKey[contKey]))
        result +=separador;
        result +=parseInt(parteTexto[i])-parseInt(parteKey[contKey]);
        contKey++;
        if (contKey >= keyTamanho) {
            contKey = 0;
        }
    }
    return result;
    
    
}

function decryptoSimple(msg, key = "textotexte",separador = ":") {
    // console.log(msg)

    var parteTexto  = msg.split(separador); //buffer pros bytes
    var comprimento =  parteTexto.length;
    // parteTexto = Buffer.from(msg);
    var keyTamanho = key.length;
    var parteKey; //buffer pros bytes
    parteKey = Buffer.from(key,"ascii"); //ascii para compatibilidade com arduino
    var result ="";
    var contKey = 0;
      
    for (var i = 1; i < parseInt(parteTexto[0]); i++) {
        // console.log(contKey)
        // console.log(typeof(parteTexto[i]))
        if(typeof(parteTexto[i]=="undefined")| (typeof(parteTexto[i]) != 'string' && typeof(parteTexto[i]) !="number")) {
            // console.log('aqui')
            break;
        }
        // result +=
        // console.log(parteTexto[i])
        // console.log(parteKey[contKey])
        var palavra  =parseInt(parteTexto[i])+parteKey[contKey];
        // console.log(Buffer.from([palavra]).toString())
        // console.log(parseInt(parteKey[contKey]))

        result += String.fromCharCode(palavra)
        contKey++;
        if (contKey >= keyTamanho) {
            contKey = 0;
        }
    }
    return result;
    
    
}

module.exports= {decryptoSimple,encryptoSimple} 