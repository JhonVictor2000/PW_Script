function calcucaH(co, ca) {
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}
function calculaCA(h, ca) {
    return Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2));
}
function calculaCO(h, co) {
    return Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2));
}
function calculaPitagoras(h, ca, co) {
    if (h == 0) {
        return calcucaH(ca, co)
    }
    else if (co == 0) {
        return calculaCA(h, co)
    }
    else {
        return calculaCO(ca, h)
    }

}
function recebePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log("resultado: " + calculaPitagoras(h, ca, co));
    document.getElementById("resposta").innerHTML=calculaPitagoras(h, ca , co);
}
