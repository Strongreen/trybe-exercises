let valorCusto = 0;
let imposto = ((valorCusto * 20) / 100);
let valorVenda = valorCusto + (( valorCusto * 80 )/100);
let lucro = 0;
let valorCustoTotal = 0;

if (valorCusto != 0 &&  valorVenda != 0){
    valorCustoTotal = valorCusto + imposto;
    lucro = valorVenda - valorCustoTotal;
    console.log(" O valor total de venda é ", lucro * 1000 )
}
else{
    console.log("Os valores estão incorretos, favor entrar em contato com a equipe tecnica")
}