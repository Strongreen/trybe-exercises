const API_URL = 'https://icanhazdadjoke.com/';

function getRandomArray() {
  aleatorio = [];
  for (let index = 0; index < 10; index += 1){
    aleatorio.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
  }
  return aleatorio;
}

function getRandomArrayPow(aleatorioResult) {
  aleatorio = [];
  for (let index = 0; index < 10; index += 1){
    aleatorio.push(Math.pow(aleatorioResult[index],2));
  }
  return aleatorio;
}

function getSoma(aleatorioQuad) {
  const totalSoma = aleatorioQuad.reduce((acc, value) => acc + value);
  return totalSoma;
}

function dividSoma(soma){
  const por2 = soma / 2;
  const por3 = soma / 3;
  const por4 = soma / 5;
  const por10 = soma / 10;
  const total = [por2, por3, por4, por10];
  return total;
}

const promise = new Promise((resolve, reject) => {
  const aleatorioQuad = getRandomArrayPow(getRandomArray());
  const soma = getSoma(aleatorioQuad);
  if (soma > 8000){
    return reject(soma);
  }
  resolve(soma);
})
.then(soma => {
  const total = dividSoma(soma);
  return total
})
.then(msg => {
  console.log(`Sucesso: [${msg}]`)
return somaArray(msg)})
.then( consolando => console.log(`Sucesso soma array: [${consolando}]`))
.catch(number => console.log(`O ${number} é mais de oito mil! Essa promise deve estar quebrada!`));


function somaArray(arrayPromise){
  const promise2 = new Promise((resolve, reject) => {
    const resultadoArrayPromise = getSoma(arrayPromise)
    resolve(resultadoArrayPromise); 
  }).catch(number => console.log(`Deu ruim no promise2`));
  return promise2
}


function createcontent(date){
  let divPai = document.querySelector(".resultado");
  let novadiv = document.createElement('div');
  novadiv.innerHTML = date;
  divPai.append(novadiv);

}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => createcontent(data.joke))
    .catch(error => console.log(`deu ruim!`));
};

window.onload = () => fetchJoke();
