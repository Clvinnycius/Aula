// Gera idades aleatórias e calcula a média de uma turma de 15 pessoas

const TAMANHO = 15;
const MIN_IDADE = 10; // ajustar conforme desejado
const MAX_IDADE = 60;

function gerarIdade(min = MIN_IDADE, max = MAX_IDADE) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const idades = Array.from({ length: TAMANHO }, () => gerarIdade());
const soma = idades.reduce((acc, v) => acc + v, 0);
const media = soma / TAMANHO;

console.log("Idades:", idades);
console.log("Média de idade:", media.toFixed(2));