var frutas = new Array('laranjas', 'manga', 'abacaxi', 'uva', 'melancia');

function abasteceVetorOrganizado(fruta){
    frutas.push(fruta)
    frutas.sort()
    return frutas.join(" | ")
}

console.log(abasteceVetorOrganizado('limao'))
console.log(abasteceVetorOrganizado('goiaba'))
console.log(abasteceVetorOrganizado('kiwi'))

