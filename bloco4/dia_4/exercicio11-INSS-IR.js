let salarioBruto = 3000;
let impostoInss = 0;
let impostoIr = 0;
let salarioLiquido = 0;
let SalarioComInssDesc = 0;

function INSS(salarioBruto){
// Calculando o INSS

    if(salarioBruto <= 1556.94){
        impostoInss = ((salarioBruto * 8) / 100);
    }
    if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        impostoInss = ((salarioBruto * 9) / 100);
    } 
    if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
        impostoInss = ((salarioBruto * 11) / 100);
    } 
    if(salarioBruto > 5189.82){
        impostoInss = (salarioBruto + 570.88);
    } 

    return impostoInss;
}

function IR(SalarioComInssDesc){
    // Calculando o IR

    if(SalarioComInssDesc <= 1.903,98){
        impostoIr = SalarioComInssDesc;
    }
    if(SalarioComInssDesc >= 1903.99 && SalarioComInssDesc <= 2826.65){
        impostoIr = (((SalarioComInssDesc * 7.5) / 100) - 142.80);
    } 
    if(SalarioComInssDesc >= 2826.66 && SalarioComInssDesc <= 3751.05){
        impostoIr = (((SalarioComInssDesc * 15) / 100) - 354.80);
    }
    if(SalarioComInssDesc >= 3751.06 && SalarioComInssDesc <= 4664.68){
        impostoIr = (((SalarioComInssDesc * 22.5) / 100) - 636.13);
    } 
    if(SalarioComInssDesc > 4664.68){
        impostoIr = (((SalarioComInssDesc * 27.5) / 100) - 869.36);
    }

    salarioLiquido = (salarioBruto - impostoInss) - impostoIr;

    return salarioLiquido;
}

SalarioComInssDesc = salarioBruto - INSS(salarioBruto);

console.log('O salario deste funcionário: ', IR(SalarioComInssDesc));

