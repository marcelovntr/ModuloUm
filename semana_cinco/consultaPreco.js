const formulario = document.querySelector('form');
formulario.addEventListener("submit", consulta);

let produtoInput = document.querySelector('input');
let valorId = document.querySelector('#valor');
function precos(produtoNome) {
    switch (produtoNome) {
        case 'mouse':
        case '1':
            return 'Valor do produto: R$ 250,00'

        case 'teclado':
        case '2':
            return 'Valor do produto: R$ 199,00'

        case 'headset':
        case '3':
            return 'Valor do produto: R$ 300,00'

        case 'mousepad':
        case '4':
            return 'Valor do produto: R$ 99,00'

        //coloco ou não isso aqui???//////////////////////////////////////////
        case 'sair':
        case '0':
            return 'Programa encerrado'

        default:
            return 'Produto não cadastrado.'
    }
}




function consulta(event) {
    event.preventDefault();
    const produtoNome = produtoInput.value;
    const item = precos(produtoNome);

    
    valorId.innerText = item;

}

function adicionaCarrinho() {
    // produtoInput.value = "";
    // valorId.innerText = 'Valor do produto: ';
}