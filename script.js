// Comentário simples.

/*Comentário
de multiplas
linhas. */

// Variáveis.

// Espaço da memória do computador que guarda um valor, o valor pode ser lido ou alterado sempre que necessário.

// Como criar uma variável:

// var numero = 10;

// let numero2 = 20;

// const numero3 = 30;

// // const = fixo (Nunca vai ser alterado)

// const minhalista = [1, 2, 3];

//Pode ser alterar coisas DENTRO da lista, porém não pode mudar a LISTA.

// Tipos de dados

// Boolean -> Tipo Lógico - Verdadeiro ou falso (true or false)
// String -> Cadeia de caracteres - texto ('Hello world')

// Int -> Números inteiros (int)
// Float -> Ponto flutuante - Números com casa decimal (3.14)  (Nuca usar " , ")

// let Verdadeiro = true;
// let nome = 'Otávio';
// let idade = 14;
// let saldo = 1.35;

// Parece que estou apredendo python novamente.

// Interação com o HTML

// DOM (Document Object Model)-> è uma apresentação  da página HTML em forma de
// estrutura de objetos (Tipo uma árvore.)

//  document -> Objeto principal que representa o DOM inteiro.

// Manipulando o DOM:

// Pega o elemento HTML baseado no id escolhido.

// const elemento = document.getElementById('id');

// // Pega todos os elementos que tiveram a classe informada.
// const elementos = document.getElementsByClassName('classe');


// // Pega apenas um elementos baseado na classe ou no id informado.
// document.querySelector('.classe');
// document.querySelector('#id');

// // Pega todos os elementos baseado na classe ou no id informado.
// // (NÂO é uma boa prática ter IDs repetidos no html)
// document.querySelectorAll('.classe');
// document.querySelectorAll('#id');


// const botaoModoClaro = document.querySelector('.modo-claro');
// const botaoModoEscuro = document.querySelector('.modo-escuro');

// console.log(botaoModoClaro);
// console.log(botaoModoEscuro);

//  Adicionar um 'EScutador' de eventos ao elemento
// ( Você deve escolher o tipo de evento a ser vigiado).

// botaoModoClaro.addEventListener('click', () => {
//     // O que eu quero que aconteça quando o botão for clicado.
//     document.body.style.background = '#fcfcfc';
//     document.body.style.color = '#000';
//     document.body.style.transition ='.4s'
// })

// botaoModoEscuro.addEventListener('click', () => {
//     // O que eu quero que aconteça quando o botão for clicado.
//     document.body.style.background = '#000';
//     document.body.style.color = '#FFF';
//     document.body.style.transition ='.4s'
// })

const div = document.getElementById('cartao');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    div.style.background = '#000'
    div.style.color = '#FFF'
    div.style.transition = '.9s'
    div.style.fontFamily = ': Arial, Helvetica, sans-serif';
})

