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
let carrinho = [];


//------------localStorage também está aqui--------------------------------
function adicionaCarrinho(nomeProduto) {
    //consulta simples e apresentação do preço correspondente 
    const produtoNome = produtoInput.value.toLocaleLowerCase();
    const item = precos(produtoNome);
    valorId.innerText = item;
    //---mensagem de adição ao carrinho
    const produto = loja.find(item => item.nome === produtoNome);
    if (produto) {
        carrinho.push(produto);
        console.log("Produto ", produto, "adicionado ao carrinho");
        alert("Produto adicionado ao carrinho:", produto);
    } else {
        console.log("Produto não encontrado.");
        alert("Produto não encontrado.");
    }
    //LocalStorage
    //aqui abaixo---------------
    const produtoInserido = {
        nome: produtoNome,
        preco: item
    }

    localStorage.setItem('umProdCarrinho', JSON.stringify(produtoInserido));

    const produtoInseridosString = localStorage.getItem('produtosCarrinho');
   
    let dados = [];
    if (produtoInseridosString) {
        dados = JSON.parse(produtoInseridosString);
    }

    dados.push(produtoInserido);

    localStorage.setItem('produtosCarrinho', JSON.stringify(dados));

    listaCarrinho();
}