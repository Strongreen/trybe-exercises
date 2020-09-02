
maior = [2, 3, 6, 7, 10, 1];

function maiorArray (maior) {
  let maiorNum = maior.sort((a, b) => a - b);
  console.log(maiorNum[(maiorNum.lenght-1]));
}

maiorArray (maior);