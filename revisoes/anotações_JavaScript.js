// Array de notas
var notas = [10, 5, 9, 3];

// Função para calcular a média
function calcularMedia(notas) {
  var soma = 0;

  // Somando todas as notas
  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  // Calculando a médiaz
  var media = soma / notas.length;

  return media;
}

// Calculando a média das notas
var media = calcularMedia(notas);

// Imprimindo a média
console.log("Média: " + media);

// Verificando se o aluno foi aprovado
if (media >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado.");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//exemplo 4 -calcular media
let media, n1, n2, n3;
n1 = prompt("Informe a primeira nota: ");
n1 = eval(n1);
n2 = prompt("Informe a segunda nota: ");
n2 = eval(n2);
n3 = prompt("Informe a terceira nota: ");
n3 = eval(n3);
media = (n1 + n2 + n3) / 3;
if (media >= 7) {
  document.write("Aprovado");
} else {
  if (media <= 6) {
    document.write("Reprovado");
  } else {
    document.write("Recuperação");
  }
}


//************************************ */
//this below is a way to insert the "onclick" directly in the JavaScript
document.getElementById("submitButton").onclick = function () {
  //a variável e o valor por ela obtido aqui estabelecidos
  //depois o document.getElementById("whatever").innerText = variável;
}


//Aula: Useful string properties and methods

let username = "coisarada"
let userLastname = "   tabacada   "
console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("r"));
console.log(username.lastIndexOf("a"));

let userLastname2 = userLastname.trim(); //removes white spaces
console.log(userLastname);
console.log(userLastname2);

console.log(username);
username = username.toUpperCase();
console.log(username);
username = username.toLowerCase();
console.log(username);

let phonenumber = "123-456-789";
console.log(phonenumber);
phonenumber = phonenumber.replaceAll("-", "!!");
console.log(phonenumber);



//**************

function diaSemana() {
  let digito;

  while (true) {
    digito = parseInt(prompt('Digite um número de 1 a 7'));

    switch (digito) {
      case 1:
        console.log('Segunda-feira');
        return; 
      case 2:
        console.log('Terça-feira');
        return;
      case 3:
        console.log('Quarta-feira');
        return;
      case 4:
        console.log('Quinta-feira');
        return;
      case 5:
        console.log('Sexta-feira /n Até que enfim');
        return;
      case 6:
        console.log('Sábado');
        return;
      case 7:
        console.log('Domingo');
        return;
      default:
        console.log('Número selecionado é inválido! /n Tente novamente.');
    }
  }
}


diaSemana();