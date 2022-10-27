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
function calculaAvancado(opcao, p1, p2, p3, p4){
    switch (opcao){
        case "pitagoras":
            return calculaPitagoras(p1, p2, p3);
            break;
        case "regra":
            return calculaRegra(p1, p2, p3, p4);
            break;
        case "calculadora":
            return calculaNumeros(p1, p2, p3);
            break;
        default:
            return "Calculo ínvalido!";    
    }

}
function calculaA(b, c, d){
    return (b*c)/d;

}
function calculaB(a, c, d){
    return (a*c)/c;
    
}
function calculaC(b, a, d){
    return (a*d)/b;
    
}
function calculaD(b, c, a){
    return (b*c)/a;
    
}
function calculaRegra(a, b, c, d){
    if(a == 0){
        return calculaA(b, c, d);
    }else if(b == 0){
        return calculaB(a, c, d);
    }else if(c == 0){
        return calculaC(b, a, d);
    }else{
        return calculaD(b, c, a);

    }

}
function calculaNumeros(n1, n2, op){
    if (op == "+"){
        return (n1 + n2);
    }if (op == "-"){
        return (n1 - n2);
    }
    if (op == "raiz"){
        return (n1, n2);
        Math.sqrt
    }
    if (op == "potencia"){
        return (n1, n2)
        Math.sinh
    }
}

console.log(calculaAvancado("calculadora" ,100, 25, "+", null));
console.log(calculaAvancado("pitagoras", 0, 20, 21, null));
console.log(calculaAvancado("regra", 100, 25, 625, 0));


