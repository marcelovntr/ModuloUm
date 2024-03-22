const formulario = document.querySelector('form');
formulario.addEventListener("submit", consulta);



const loja = [
    { nome: 'mouse', preco: 250.00, imagem: 'mouse.png' },
    { nome: 'teclado', preco: 199.00, imagem: 'teclado.png' },
    { nome: 'headset', preco: 300.00, imagem: 'headset.png' },
    { nome: 'mousepad', preco: 79.00, imagem: 'mousepad.png' }
];

let produtoInput = document.querySelector('input');
let valorId = document.querySelector('#valor');
function precos(produtoNome) {
    switch (produtoNome) {
        case 'mouse':

            return loja[0].preco

        case 'teclado':

            return loja[1].preco

        case 'headset':

            return loja[2].preco

        case 'mousepad':

            return loja[3].preco


        default:
            return 'Produto não cadastrado'
    }
}


function consulta(event) {
    if (event) {
        event.preventDefault();
    }
    const produtoNome = produtoInput.value.toLocaleLowerCase();
    const item = precos(produtoNome);


    valorId.innerText = 'Preço do produto (Un.): ' + item;
    trocarImagem();

}

function trocarImagem() {
    console.log("Chamada da função trocarImagem");
    const figura = document.getElementById('figura');
    const produtoNome = produtoInput.value.toLocaleLowerCase();

    const figurinha = loja.find(item => item.nome === produtoNome);
    console.log("Valor de figurinha:", figurinha);
    if (figurinha) {
        figura.src = figurinha.imagem;
    }
    else {
        figura.src = '';
    }
}
function adicionaCarrinho() {
    // produtoInput.value = "";
    // valorId.innerText = 'Valor do produto: ';
}