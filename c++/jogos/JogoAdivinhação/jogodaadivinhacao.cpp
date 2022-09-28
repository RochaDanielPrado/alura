/*Standart Library */
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std; /* para evitar a digitação no codigo de std:: */

int main (){
    /* 
    std::cout << "**************************************" << std::endl;
    std::cout << "* Bem vindos ao jogo da adivinhacao! *" << std::endl;
    std::cout << "**************************************" << std::endl; */

    cout << "**************************************" << endl;
    cout << "* Bem vindos ao jogo da adivinhação! *" << endl;
    cout << "**************************************" << endl;

    cout << "Escolha o seu nível de dificuldade: " << endl;
    cout << "Fácil (F), Médio (M) ou Difícil (D)" << endl;

    char dificuldade;
    cin >> dificuldade;

    int numero_de_tentativas;

    if(dificuldade == 'F'){
        numero_de_tentativas = 15;
    }
    else if(dificuldade == 'M'){
        numero_de_tentativas = 10;
    }
    else{
        numero_de_tentativas = 5;
    }

    srand(time(NULL));
    const int NUMERO_SECRETO = rand() % 100; /* resto da divisão por 100 */

    bool nao_acertou = true;
    int tentativas = 0;

    double pontos = 1000.0;
   
    for(tentativas = 1; tentativas <= numero_de_tentativas; tentativas++){
        
        cout << "Tentativa " << tentativas << endl;
        int chute;
        cout << "Qual é seu chute? ";
        cin >> chute;
        cout << "O valor do seu chute é: " << chute << endl;

        bool acertou = chute == NUMERO_SECRETO;
        bool maior = chute > NUMERO_SECRETO;

        double pontos_perdidos = abs(chute - NUMERO_SECRETO)/2.0;
        pontos = pontos - pontos_perdidos;
            
        if(acertou){
           
            cout << "Parabéns! Você acertou o número secreto!" << endl;
            break;
        } 
        else if (maior){
            cout << "Seu chute foi maior que o número secreto!" << endl;
        }
        else {
            cout << "Seu chute foi menor que o número secreto!" << endl;
        }
    }
    cout << "Fim de Jogo!" << endl;
    if(nao_acertou){
        cout << "Você perdeu! Tente novamente!" << endl;    
    }
    else {
    cout << "Você acertou em " << tentativas << " tentativas" << endl;
    cout.precision(2);
    cout << fixed;
    cout << "Sua pontuação foi de " << pontos << " pontos" << endl;
    }
}