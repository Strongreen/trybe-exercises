let Xadrez = "Bispo";
let xadrez = Xadrez.toLowerCase()

function xadreiz(xadrez){
    switch (xadrez){
        case 'rei':
            console.log('Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.');
        break;

        case 'dama':
            console.log('A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.');
        break;

        case 'torre':
            console.log('A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.');
        break;

        case 'bispo':
            console.log('O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro (claras ou escuras).');
        break;
        case 'cavalo':
            console.log('O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.');
        break;
        case 'peão':
            console.log('Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas');
        break;
        default:
            console.log("Essa peça não existe");
    }
}

xadreiz(xadrez);