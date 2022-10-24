function cumprimentoNeutro(entrada){
    switch (entrada){
        case "good morning":
           return"bom dia";
            break;
            case "good afternoon":
                return "boa tarde";
                break;

                case "good night":
                return "Boa noite";
                break;

                default:
                    return "Fora do Padrao!"
    }
}

console.log(cumprimentoNeutro("good afternoon"));