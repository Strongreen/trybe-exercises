let porcentagem = 30;

function nota(porcentagem){

    switch (true){
        case (porcentagem >= 90):
            console.log("A");
        break;

        case (porcentagem >= 80):
            console.log("B");
        break;

        case (porcentagem >= 70):
            console.log("C");
        break;

        case (porcentagem >= 60):
            console.log("D");
        break;
        case (porcentagem >= 50):
            console.log("E");
        break;
        case (porcentagem < 50):
            console.log("F");
        break;
        default:
            console.log("A nota informada não abrange essa contagem");
    }

}

nota(porcentagem);