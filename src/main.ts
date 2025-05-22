let numeroDeCadeiras: number;

numeroDeCadeiras = 21;

console.log(numeroDeCadeiras);

let professora: string;

professora = 'Lana';

console.log(professora);

let hojeTemAula: boolean;

hojeTemAula = true;

console.log(hojeTemAula);

let corDaParede: string;

console.log(corDaParede);

interface Aluno {
    nome: string;
    nota: number;
}

let alunoDestaque: Aluno = {
    nome: 'Tayna',
    nota: 9,
};

console.log(alunoDestaque.nome + '\nnota: ' + alunoDestaque.nota);
