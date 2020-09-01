let n = 5;
let asteriscos = "*";
let espaco = "";
let linha = "";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;
let lineColumn;

for (linha = 0; linha <= midOfMatrix; linha += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      espaco = espaco + asteriscos;
    } else {
      espaco = espaco + ' ';
    }
  }
  console.log(espaco);
  espaco = '';
  controlRight -= 1;
  controlLeft += 1;
};