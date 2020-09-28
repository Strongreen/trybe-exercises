const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function AdicionaTurno(objectModify, keyModify, valueModify) {
    return  objectModify[keyModify] = valueModify;
}


AdicionaTurno(lesson2, 'turno', 'manhã')

console.log(lesson2)


function RetornaKeys(objectModify){
  const retornaKeys = Object.keys(objectModify);
  return retornaKeys;
}

console.log(RetornaKeys(lesson1));
