"use strict";
/* Boolean */
var contaPaga = false;
/* Number */
var idade = 20;
var avaliacao = 4.5;
/* String */
var nome = "Adailton";
/* Array */
var idades = [23, 27, 29, 45];
var idades2 = [32, 54, 12, 25];
/* Tuple */
var jogadores;
jogadores = ['Vitor', 'Fulano', 'Ciclano'];
/* Enum */
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var stat = statusAprovacao.Aprovado;
/* Any */
var retornoDaAPI = [123, 'Vitor', false];
var retornoDaAPI2 = {
// ...
};
/* Void */
function printarNaTela(msg) {
    console.log(msg);
}
/* Null e Undefined */
var u = undefined;
var n = null;
/* Object */
function criar(objeto) {
    // ...
}
/* Never */
function loopInfinito() {
    while (true)
        ;
}
/* Union Types */
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
var funcionarios = [{
        nome: 'Adailton',
        sobrenome: 'Bezerra',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcion\u00E1rio: " + funcionario.nome);
    }
}
var contato = {
    nome: 'Adailton',
    telefone1: '4002-8922'
};
/* Type Assertion */
var minhaIdade = 20;
minhaIdade.toString();
// <number> minhaIdade.toString();
// const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
