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


// function AdicionaTurno(objectModify, keyModify, valueModify) {
//     return  objectModify[keyModify] = valueModify;
// }


// AdicionaTurno(lesson2, 'turno', 'manhã')

// console.log(lesson2)


// function RetornaKeys(objectModify){
//   const retornaKeys = Object.keys(objectModify);
//   return retornaKeys;
// }

// console.log(RetornaKeys(lesson1));


// //  3 

// function RetornaTamanho(objectModify){
//   const retornaKeys = Object.keys(objectModify);
//   return retornaKeys.length;
// }

// console.log(RetornaTamanho(lesson1));

// // 4 

// function RetornaValores(objectModify){
//   const retornaValue = Object.values(objectModify);
//   return retornaValue;
// }

// console.log(RetornaValores(lesson3));


// 5 

let allLessons = [];

allLessons = (lesson1, lesson2, lesson3) => {
  let clone = Object.assign({},lesson1, lesson2, lesson3);
  return clone;
}



console.log(allLessons(lesson1, lesson2, lesson3));



