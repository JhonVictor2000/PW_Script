function calculaH(ca, co){
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));

}
function calculaCa(h, co){
    return Math.sqrt(Math.pow(h, 2) - (Math.pow(co, 2)));
    
}
function calculaCo(h, ca){
    return Math.sqrt(Math.pow(h, 2) - (Math.pow(ca, 2)));
    
}

function calculaPitagoras(h, ca, co){
    if(h == 0){
        return calculaH(ca, co);
    }
    else if(ca == 0){
        return calculaCa(h, co);
    }
    else{
        return calculaCo(h, ca);
    }

}

function abastecePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log(calculaPitagoras(h, ca, co));
    document.getElementById("resultado").innerHTML=calculaPitagoras(h, ca, co)
}