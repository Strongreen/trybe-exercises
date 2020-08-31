let n = 5;
let asteriscos = "";
let espaco = "";
let linha = "";

for(let i=0; i <= n; i++){
    if(espaco.length === (n-1)){
        for (let j = 0; j < n; j++){
            asteriscos += '*';
            linha = espaco + asteriscos;
            console.log(linha);
            espaco = espaco.substr(1,(espaco.length - 1));
        }
    }
    else{
        espaco += ' ';
    }
}

