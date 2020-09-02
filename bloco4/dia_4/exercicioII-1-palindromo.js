
function palindromo (palavra) {
  if(palavra == palavra.split('').reverse().join('')){
    console.log("É um palindromo");
  }
  else{
    console.log("Não é um palindromo");
  }

}

palindromo("arara");
palindromo("desenvolvimento");
