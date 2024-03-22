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

//--------------para exibir a lista das adições ao carrinho (últimos exercício)
function listaCarrinho() {

    const produtosCarrinhoString = localStorage.getItem('produtosCarrinho');

    let produtosCarrinho = [];
    if (produtosCarrinhoString) {
        produtosCarrinho = JSON.parse(produtosCarrinhoString);
    }

    const listaStorage = document.getElementById('storage');
    listaStorage.innerHTML = ''; // Limpa conteúdo anterior

    // Atualiza lista de itens no carrinho
    produtosCarrinho.forEach(produto => {
        const listItem = document.createElement('li');
        listItem.textContent = produto.nome + ' : ' + produto.preco;
        listaStorage.appendChild(listItem);
    });

    // total e a quantidade de itens
    let total = 0;
    let quantidade = produtosCarrinho.length;

    produtosCarrinho.forEach(produto => {
        console.log('Preço do produto???', produto.preco);
        total += Number(produto.preco);
    });

    // Atualizar os elementos HTML 
    const totalElement = document.getElementById('total');
    const quantidadeElement = document.getElementById('quantidade');

    totalElement.textContent = 'Total da compra: R$ ' + total.toFixed(2);
    quantidadeElement.textContent = 'Itens no carrinho: ' + quantidade;
}

function calcularTotal() {
    const totalCompra = document.getElementById('total');
    const quantidadeProd = document.getElementById('quantidade');
    let soma = 0;
    let contagem = 0;

    // Verificar se o carrinho está vazio
    if (carrinho.length === 0) {
        alert('Carrinho vazio');
        return;
    }

    // Percorrer cada item no carrinho e somar os preços
    carrinho.forEach(item => {
        soma += item.preco;
        contagem++;
    });

    // Exibir totais
    quantidadeProd.innerText = 'Itens no carrinho: ' + contagem;
    totalCompra.innerText = 'Total da compra: R$ ' + soma.toFixed(2);
    //alert('Total da compra: R$ ' + soma.toFixed(2));


}

