/* Boolean */
const contaPaga: boolean = false;

/* Number */
const idade: number = 20;
const avaliacao: number = 4.5;

/* String */
const nome: string = "Adailton";

/* Array */
const idades: number[] = [ 23, 27, 29, 45 ];
const idades2: Array<number> = [ 32, 54, 12, 25 ];

/* Tuple */
let jogadores: [ string, string, string ];
jogadores = ['Vitor', 'Fulano', 'Ciclano'];

/* Enum */
enum statusAprovacao {
    Aprovado  = '001',
    Pendente  = '002',
    Rejeitado = '003'
}
const stat: statusAprovacao = statusAprovacao.Aprovado;

/* Any */
const retornoDaAPI: any[] = [ 123, 'Vitor', false ]
const retornoDaAPI2: any = {
    // ...
};

/* Void */
function printarNaTela(msg: string): void {
    console.log(msg);
}

/* Null e Undefined */
const u: undefined  = undefined;
const n: null       = null;

/* Object */
function criar(objeto: object) {
    // ...
}

/* Never */
function loopInfinito(): never {
    while(true);
}

/* Union Types */
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);    
}

/* Alias */
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
};

const funcionarios: Funcionario[] = [{
    nome: 'Adailton',
    sobrenome: 'Bezerra',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (const funcionario of funcionarios) {
        console.log(`Nome do funcionário: ${funcionario.nome}`);
        
    }
}

/* Valor opcional */
type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string
};

const contato: Contato = {
    nome: 'Adailton',
    telefone1: '4002-8922'
};

/* Type Assertion */
const minhaIdade: any = 20;
(minhaIdade as number).toString();
// <number> minhaIdade.toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement> document.getElementById("numero1");
console.log(input.value);