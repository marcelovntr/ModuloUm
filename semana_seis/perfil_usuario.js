alert('Seja muito bem vindo ao seu perfil de usuário!');

function alteraNome (){
    const alterarNome = document.getElementById('nome');

    let novoNome = prompt('Qual o novo nome?');
    
    if(novoNome===''|| novoNome === null){
        novoNome='Nome Inicial(teste)';
    }
    alterarNome.innerText = novoNome;
}
