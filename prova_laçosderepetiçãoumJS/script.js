function calcularEstatisticas() {
    const numeroEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

    let somaNotas = 0;
    let maiorNota = -Infinity; 
    let menorNota = Infinity;   

    for (let i = 1; i <= numeroEstudantes; i++) {
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
        somaNotas += nota;

        if (nota > maiorNota) {
            maiorNota = nota;
        }
        if (nota < menorNota) {
            menorNota = nota;
        }
    }

    const media = somaNotas / numeroEstudantes;

    alert(`Média da turma: ${media.toFixed(2)}\nMaior nota: ${maiorNota}\nMenor nota: ${menorNota}`);
}

calcularEstatisticas();