
//EXERCÍCIOS IF/ELSE

//exercício 1-descobrir se a pessoa é maior ou menor de idade:
let idade = Number(prompt('Informe sua idade: '));

//modo com ternário
console.log((idade >= 18) ? 'maior de idade' : 'menor de idade');

//modo "padrão"
if (idade >= 18) {
    console.log('maior de idade');
}
else {
    console.log('menor de idade');
}

//exercício 2-descobrir se determinado número é positivo, negativo ou zero:

let numero = Number(prompt(''));

if (numero > 0) {
    console.log(`O número ${numero} é positivo`);
}
else if (numero < 0) {
    console.log('O número ', numero, ' é negativo');
} else {
    console.log('Você inseriu o número zero!');
}

//exercício 3-descobrir se determinado ano é bissexto:

let ano = prompt('Insira o ano desejado: ');

if ((ano % 4 == 0) && (ano % 100 != 0 || ano % 400 == 0)) {
    console.log('O ano ', ano, ' é bissexto!');

}
else {
    console.log(`O ano ${ano} não é bissexto!`);
}

//exercício 4:

let parimpar = prompt('Digite o número a ser testado: ');

if (parimpar % 2 == 0) {
    console.log('O número ', parimpar, ' é par!');
}
else {
    console.log(`O número ${parimpar} é ímpar!`);
}
//exercício 5:

//Escreva um programa que determine se um aluno foi aprovado, reprovado ou está em
//recuperação, considerando que a nota mínima para aprovação é 7, e para recuperação é 5.

let nota1 = Number(prompt('Insira a primeira nota: '));
let nota2 = Number(prompt('Insira a segunda nota: '));
let nota3 = Number(prompt('Insira a terceira nota: '));

function media() {
    let notaFinal = (nota1 + nota2 + nota3) / 3;
    return notaFinal;

}

if (media() >= 7) {
    console.log(`Sua média final é: ${media()}`);
    console.log('Você foi aprovado!');
} else if (media() <= 7 && media() >= 5) {
    console.log(`Sua média final é: ${media()}`);
    console.log('O aluno está em recuperação!')
} else {
    console.log(`Sua média final é: ${media()}`);
    console.log('O aluno não foi aprovado!');
}

//exercício 6:
//Faça um programa que determine o maior de três números informados

//JEITO FÁCIL:

let primeiro = Number(prompt('Qual o primeiro número?'));
let segundo = Number(prompt('Qual o segundo número?'));
let terceiro = Number(prompt('Qual o terceiro número?'));

let maior = Math.max(primeiro, segundo, terceiro);
let menor = Math.min(primeiro, segundo, terceiro);

console.log('O maior é o número: ', maior);
console.log(`O menos é o número: ${menor}`);

//JEITO MENOS FÁCIL:

let a = Number(prompt('Qual o primeiro número?'));
let b = Number(prompt('Qual o segundo número?'));
let c = Number(prompt('Qual o terceiro número?'));

if (a > b && a > c) {
    console.log('O maior é o número: ', a);
    console.log(`O menos é o número: ${a}`);
}
else if (b > a && b > c) {
    console.log('O maior é o número: ', b);

}
else {

    console.log(`O menos é o número: ${c}`);
}



console.log('O maior número é: ', greater);

//exercícioo 7:
//se ano é ímpar ou par

let anoImpar = parseInt(prompt('Digite o ano em questão: '));
if (anoImpar % 2 === 0) {
    console.log("O ano é par.");
} else {
    console.log("O ano é ímpar.");
}

//EXERCÍCIO SWITCH/CASE

/*exercício 1 
Escreva um programa que leia um número de 1 a 7 e imprima o dia da semana correspondente.
*/

//Execução única:
function diaSemana() {
    let digito = parseInt(prompt('Digite um número de 1 a 7'));

    switch (digito) {
        case 1:
            console.log('Segunda-feira');
            break;
        case 2:
            console.log('Terça-feira');
            break;
        case 3:
            console.log('Quarta-feira');
            break;
        case 4:
            console.log('Quinta-feira');
            break;
        case 5:
            console.log('Sexta-feira /n Até que enfim');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('Número selecionado é inválido! /n Tente novamente.');
    }
}


diaSemana();

//adicionando WHILE:
function diaSemana() {
    let digito = parseInt(prompt('Digite um número de 1 a 7'));

    while (digito < 1 || digito > 7) {
        console.log('Número selecionado é inválido! Tente novamente.');
        digito = parseInt(prompt('Digite um número de 1 a 7'));
    }

    switch (digito) {
        case 1:
            console.log('Segunda-feira');
            break;
        case 2:
            console.log('Terça-feira');
            break;
        case 3:
            console.log('Quarta-feira');
            break;
        case 4:
            console.log('Quinta-feira');
            break;
        case 5:
            console.log('Sexta-feira /n Até que enfim');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
    }
}

diaSemana();

//Exercício 2: Crie um programa que verifique se uma letra é vogal ou consoante.

function vogalConsoante() {

    let letra = prompt('Digite a letra desejada: ');

    //tentei buscar a forma de apenas aceitar letras, porém não entendi a forma de aceitar apenas um carácter
    if (/^[a-zA-Z]/.test(letra)) {
        letra = letra.toUpperCase();


        switch (letra) {
            case 'A':
                console.log('A é uma vogal');
                break;
            case 'E':
                console.log('E é uma vogal');
                break;
            case 'I':
                console.log('I é uma vogal');
                break;
            case 'O':
                console.log('O é uma vogal');
                break;
            case 'U':
                console.log('U é uma vogal');
                break;

            default:
                console.log('A letra ',letra, 'é uma consoante');
        }
    }
    else{
        console.log('Apenas letras são aceitas');
    }

}
vogalConsoante();

//Exercício 3:
//Faça um programa que converta um número em um mês do ano.

const mes = Number(prompt('Insira um número entre 1 e 12: '));

switch(mes){
   
        case 1:
            console.log('Mês selecionado: Janeiro');
        break;
        case 2:
            console.log('Mês selecionado: Fevereiro');
        break;
        case 3:
            console.log('Mês selecionado: Março');
        break;
        case 4:
            console.log('Mês selecionado: Abril');
        break;
        case 5:
            console.log('Mês selecionado: Maio');
        break;
        case 6:
            console.log('Mês selecionado: Junho');
        break;
        case 7:
            console.log('Mês selecionado: Julho');
        break;
        case 8:
            console.log('Mês selecionado: Agosto');
        break;
        case 9:
            console.log('Mês selecionado: Setembro');
        break;
        case 10:
            console.log('Mês selecionado: Outubro');
        break;
        case 11:
            console.log('Mês selecionado: Novembro');
        break;
        case 12:
            console.log('Mês selecionado: Dezembro');
        break;
        }

//Exercício 4:
//Crie um programa que classifique um dia como útil ou final de semana.

const utilWknd = prompt('Qual o dia em questão?').toLowerCase;

switch(utilWknd){
    case 'domingo':
        console.log('Domingo é fim de semana, embora seja o 1º dia dela');
        break;
    case 'sábado':
        console.log('Sábado é fim de semana!');
        break;
    default:
        console.log(utilWknd, 'é um dia de semana');

}

//Exercício 5:
//Escreva um programa que determine o nome de um polígono a partir do número de lados.

const lados = Number(prompt('Quantos lado possui o polígono em questão?'));

switch(lados){

    case 3:
        console.log('Este polígono é uma triângulo');
    break;
    case 4:
        console.log('Este polígono é uma quadrado');
    break;
    case 5:
        console.log('Este polígono é uma pentagono');
    break;
    case 6:
        console.log('Este polígono é uma hexagono');
        break;
    case 7:
        console.log('Este polígono é uma heptagono');
        break;
    case 8:
        console.log('Este polígono é uma octógono');
        break;
    case 9:
        console.log('Este polígono é uma eneágono');
        break;
    case 10:
        console.log('Este polígono é uma decagono');
        break;
    default:
        console.log('Polígonos nível NASA');
}


/*Exercício 6:
Faça um programa que verifique se um número é positivo, negativo ou zero.
*/

const sinal = Number(prompt('Insira o número desejado: '));

//tentei mas não consegui entender porque com switch(sinal) não funciona
switch(true){
case sinal>0:
    console.log('Número positivo');
break;

case sinal<0:
    console.log('Número negativo');
break;

default:
    console.log('Número zero');

}

/* Exercício 7:
Crie um programa que determine a estação do ano a partir do mês.
*/

const estacao = prompt('Qual o mês desejado?').toLowerCase();

switch(estacao){

    case dezembro:
    case janeiro:
    case março:
        console.log("Verão");
        break;
    case abril:
    case maio:
    case junho:
        console.log("Outono");
        break;
    case julho:
    case agosto:
    case setembro:
        console.log("Inverno");
        break;
    case outubro:
    case novembro:
    case dezembro:
        console.log("Primavera");
        break;
    default:
        console.log("Mês inexistente");
}


