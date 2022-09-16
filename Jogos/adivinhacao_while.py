print("********************************")
print("Bem vindo ao jogo de Adivinhação")
print("********************************")

numero_secreto = 42
total_de_tentativas = 3
rodada = 1

while(rodada <=  total_de_tentativas ): #comentario
    print("Tentativa {} de {}".format(rodada,total_de_tentativas))
    chute_str = input("Digite o seu numero: ")
    chute = int(chute_str)
    print("Você digitou ", chute)

    acertou = chute == numero_secreto
    maior = chute > numero_secreto
    menor = chute < numero_secreto

    if (acertou):
        print("Você acertou!")
    else:
        if (maior):
            print("Você errou! O seu chute foi maior")
        elif (menor):
            print("Você errou! O seu chute foi menor")

    rodada= rodada + 1

print("Fim do jogo")
