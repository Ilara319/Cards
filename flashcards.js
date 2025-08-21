let flashcards = [
    { pergunta: "O que é uma função em JavaScript?", resposta: "Um bloco de código reutilizável que executa uma tarefa." },
    { pergunta: "O que é um 'loop for'?", resposta: "Uma estrutura de repetição para executar um código várias vezes." },
    { pergunta: "O que é uma variável?", resposta: "Um contêiner para armazenar valores de dados." }
];

let indice = 0;
let cardVirado = false;
let conteudoCard = document.getElementById("conteudo-card");

function virarCard() {
    if (cardVirado) {
        // Se já está na resposta, mostra a próxima pergunta
        indice = (indice + 1) % flashcards.length;
        conteudoCard.textContent = flashcards[indice].pergunta;
        cardVirado = false;
    } else {
        // Se está na pergunta, mostra a resposta
        conteudoCard.textContent = flashcards[indice].resposta;
        cardVirado = true;
    }
}
