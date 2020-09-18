
let estados = {
    Acre: "AC",
    Alagoas: "AL",
    Amapa: "AP",
    Amazonas: "AM",
    Bahia: "BA",
    Ceara: "CE",
    DistritoFederal: "DF",
    EspiritoSanto: "ES",
    Goias: "GO",
    Maranhao: "MA",
    MatoGrosso: "MT",
    MatoGrossodoSul: "MS",
    MinasGerais: "MG",
    Para: "PA",
    Paraiba: "PB",
    Parana: "PR",
    Pernambuco: "PE",
    Piaui: "PI",
    RiodeJaneiro: "RJ",
    RioGrandedoNorte: "RN",
    RioGrandedoSul: "RS",
    Rondonia: "RO",
    Roraima: "RR",
    SantaCatarina: "SC",
    SaoPaulo: "SP",
    Sergipe: "SE",
    Tocantins: "TO"
}

let estado = document.querySelector('#estado');
let seleciona = [];

function selectEstado(){

    seleciona = document.createElement('option');

    seleciona.text = estados[0];
    seleciona.value = estados[0];

    console.log(estados.['Acre']);
    estado.appendChild(seleciona);

    for(let index = 0 ; index <= estados.length; index++){

        seleciona[index].document.createElement('option');
        seleciona[index].text = estados[index];
        seleciona[index].value = [index];
        estado.append(seleciona[index]);
    }

}


selectEstado();









