/* Ex 1 - Função de mensagem
Crie uma função que exiba uma mensagem simples no console.
escolha a mensagem que será exibida no console.log
*/

function mensagem() {
    console.log('Esta é uma mensagem secreta, \n ela se autodestruirá em 10 segundos');
}

mensagem();

/*Ex 2 - Atribuição de valores
Declare uma variável e atribua um número a ela, em seguida, exiba seu valor no console.
Atribua o valor a variável usando o window.prompt();
*/

let numero = 0;

console.log('O valor inicial da variável é:', numero);
numero = Number(window.prompt('Qual valor deseja atribuir à variável?'));
console.log(`O novo valor da variável é: ${numero}`);

/* Ex 3 - Concatenação
Combine duas strings usando o operador de concatenação e exiba o resultado no console.
Utilize o template string ou a concatenação simples.
 */

let entradaUm = prompt('Qual sua nacionalidade?');
let entradaDois = prompt('Qual seu ano de nascimento?');

console.log('Então você é ', entradaUm, 'e nasceu em ', entradaDois, '?');

/*Ex 4 -Função com parâmetros
Crie uma função que receba dois números como parâmetros e retorne sua soma no console.log. */

function soma(primeiro, segundo) {
    return primeiro + segundo;
}

console.log(soma(77, -74));

/*Ex 5 - Estruturas condicionais
Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. 
Exiba os valores no console.log().
*/
let verificar = Number(prompt('Qual número deseja analisar?'));

if (verificar > 0) {
    console.log(`O número ${verificar} é positivo!`);
}
else if (verificar < 0) {
    console.log(`O número ${verificar} é negativo!`);
}
else {
    console.log(`O número ${verificar}, como pode ver, é ZERO!`);
}

/*Ex 6 - Objetos
Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) 
e exiba essas informações com um console.log para cada objeto. */
//console.log(JSON.stringify(objeto, null, 2));
const pessoa1 = {
    nome: 'Paulo',
    idade: 37,
    nacionalidade: 'hondureno',
    profissao: 'ourives'
};
const pessoa2 = {
    nome: 'Ananias',
    idade: 319,
    nacionalidade: 'malaio',
    profissao: 'ascensorista'
};
const pessoa3 = {
    nome: 'Iker',
    idade: 29,
    nacionalidade: 'espanhol',
    profissao: 'herdeiro'
};

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
//apenas com os valores:
console.log(pessoa1.nome, pessoa1.idade, pessoa1.nacionalidade, pessoa1.profissao);
//desestruturação (pesquisa no google):
const { nome, idade, nacionalidade, profissao } = pessoa1;
console.log(nome, idade, nacionalidade, profissao);

/*Ex 7 - Função cumprimentos
Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem 
de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada. */

const hora = parseFloat(prompt('Qual a hora mostrada no relógio?').replaceAll(',', '.'));
//este replace foi mostrado em aula e também pesquisei rapidamente

if (hora >= 6.00 && hora <= 13.00) {
    console.log('Bom dia!');
}
else if (hora >= 13.01 && hora <= 18) {
    console.log('Boa tarde!');
}
else {
    console.log('Boa noite!');
}

/*Ex 8 - Função par/impar
Implemente uma função que determine se um número é par ou ímpar. */

const parimpar = Number(prompt('Insira o número: '));
console.log((parimpar % 2 == 0 ? `O número ${parimpar} é par!` : `O número ${parimpar} é ímpar!`));

/*Ex 9 - Switch/case
Use um switch para exibir mensagens diferentes com base em uma condição. */

let nomeCompleto;
let novoNome;
let simNao;
/*no caso, isso funcionaria melho com HTML, claro, e também sendo mais bem trabalhado
mas era mais pra "treinar" hipoteticamente
*/
function inicio() {
    document.write('------------MENU PRINCIPAL------------');
    document.write('1- Cadastrar');
    document.write('2- Alterar Dados');
    document.write('3- Excluir Conta');
    document.write('4- Sair');
    document.write('\n');
    const opcao = Number(prompt('O que deseja fazer?'));

    switch (opcao) {

        case 1:
            cadastro();
            break;
        case 2:
            alterar();
            break;
        case 3:
            excluir();
            break;
        case 4:
            sair();
            break;
    }
}


function cadastro() {
    nomeCompleto = prompt('Nome completo: ');
    //supostamente guardando em vetores correspondentes
    console.log('Cadastro realizado com sucesso!');
    //chamando inicio() de uma forma mais trabalhada ao final de cada função
}
function alterar() {
    novoNome = prompt('Insira o novo nome:');
    console.log('Alteração realizada com sucesso!');
}
function excluir() {
    simNao = confirm('Tem certeza que deseja exlucir o cadastro?');
    if (true) {
        console.log('Cadastro excluído!');
    }
    else {
        console.log('voltando ao menu inicial');
        //inicio() seria chamado
    }



}
function sair() {
    console.log('Volte sempre!');
}

inicio();

/*Ex 10 - Solicitação de dados em função
Crie uma função que solicite para o usuário através do prompt de comando sua idade, 
e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.
*/

let age = Number(prompt('Informe sua idade: '));

//modo com ternário
console.log((age >= 18) ? 'maior de idade' : 'menor de idade');

//modo "padrão"
if (age>= 18) {
    console.log('maior de idade');
}
else if(age>0 && age<18){
    console.log('menor de idade');
}
else{
    console.log('houve algum erro, digite um valor válido para idade (> 0)')
}