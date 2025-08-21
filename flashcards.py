import time

flashcards = {
    "Qual a capital do Brasil?": "Brasília",
    "Qual a capital da França?": "Paris",
    "Qual a capital do Japão?": "Tóquio",
    "Qual a capital da Austrália?": "Camberra"
}

print("Bem-vindo ao Flashcards de Capitais!\n")
print("Pressione 'Enter' para ver a resposta.\n")

for pergunta, resposta in flashcards.items():
    print("---")
    print(f"Pergunta: {pergunta}")
    input()  # Espera o usuário pressionar 'Enter'
    print(f"Resposta: {resposta}\n")
    time.sleep(1) # Pausa por 1 segundo antes da próxima pergunta

print("Fim do Quiz!")
