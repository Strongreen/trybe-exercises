let catetos1 = 60;
let catetos2 = 60;
let hipotenusa = 60;

let compara = catetos1 + catetos2 + hipotenusa;

// refazer com o switch case

switch (true){
    case (compara == 180):
        console.log(true);
    break;
    case (compara > 180 || compara < 180):
    console.log(false);
    break;
    default:
        console.log("A triangulo está com os angulos incorretos");
}


