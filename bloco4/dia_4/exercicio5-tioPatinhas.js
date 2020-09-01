let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let tioPat = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Atenção para essa última linha!'
}

info.recorrente = "Ambos recorrentes"


console.log(info.personagem + ' e ' + tioPat.personagem);
console.log(info.origem + ', ' + tioPat.origem);
console.log(info.nota + ' e ' + tioPat.nota);
console.log(info.recorrente + " // " + tioPat.recorrente);
