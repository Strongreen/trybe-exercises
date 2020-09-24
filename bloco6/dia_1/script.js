let estados = [
    "Acre",
    "Alagoas",
    "Amapa",
    "Amazonas",
    "Bahia",
    "Ceara",
    "Distrito Federal",
    "Espirito Santo",
    "Goias",
    "Maranhao",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Para",
    "Paraiba",
    "Parana",
    "Pernambuco",
    "Piaui",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondonia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
]

let estado = document.querySelector('#estado');
let seleciona = [];

function selectEstado() {
    for (let index = 0; index < estados.length; index++) {
        seleciona[index] = document.createElement('option');
        seleciona[index].value = estados[index];
        seleciona[index].text = estados[index];
        estado.append(seleciona[index]);
    }

}


selectEstado();