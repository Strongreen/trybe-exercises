let n = 5;
let asteriscos = "";

for(let i=0; i <= n; i++){
    if(asteriscos.length === n){
        for (let j = 0; j < n; j++){
            console.log(asteriscos);
        }
    }
    else{
        asteriscos += "*";
    }
}
