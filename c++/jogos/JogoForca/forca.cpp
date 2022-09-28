/*Standart Library */
#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <fstream>
#include <ctime>
#include <cstdlib>

using namespace std; /* para evitar a digitação no codigo de std:: */

string palavra_secreta = " "; /* variavel com escopo global*/
map<char, bool> chutou;
vector<char> chutes_errados;

bool letra_existe(char chute){
    /*for(int i = 0; i < palavra_secreta.size(); i++){
        if(chute == palavra_secreta[i]){
            return true;
        }
    }*/

    for(char letra : palavra_secreta){
        if(chute == letra){
            return true;
        }
    }
    return false;
}

bool nao_acertou(){
    for(char letra : palavra_secreta){
        if(!chutou[letra]){
            return true;
        }
    }
    return false;
}

bool nao_enforcou(){
    return chutes_errados.size() < 5;
}

void imprime_cabecalho(){
    cout << "**************************" << endl;
    cout << "*******Jogo da Forca******" << endl;
    cout << "**************************" << endl;
    cout << endl;
}

void imprime_erros(){
    cout << "Chutes errados: ";
    for(char letra: chutes_errados){
        cout << letra << " ";
    }
    cout << endl;
}

void imprime_palavra(){
    for(char letra : palavra_secreta){
        if( chutou[letra] ){
            cout << letra << " ";
        }
        else{
            cout << "_ ";
        }
    }
    cout << endl;
}

void chuta(){
    cout << "Seu chute:" << endl;
    char chute;
    cin >> chute;
    chutou[chute] = true;

    if(letra_existe(chute)){
        cout << "Você acertou! Seu chute está na palavra." << endl;
    }
    else {
        cout << "Você errou! Seu chute não está na palavra." << endl;
        chutes_errados.push_back(chute);
    }
    cout << endl;
}

vector<string> le_arquivo(){
    ifstream arquivo;
    arquivo.open("palavras.txt");

    if(arquivo.is_open()){
        int quantidade_palavras;
        arquivo >> quantidade_palavras;

        vector<string> palavras_arquivo;

        for(int i=0;i<quantidade_palavras;i++){
            string palavra_lida;
            arquivo >> palavra_lida;
            palavras_arquivo.push_back(palavra_lida);
        }
        arquivo.close();
        return palavras_arquivo;
    }
    else{
        cout << "Não foi possivel acessar o banco de palavras" << endl;
        exit(0);
    }
}

void sorteia_palavra(){
    vector<string> palavras = le_arquivo();
    srand(time(NULL));
    int indice_sorteado = rand() % palavras.size();
 
    palavra_secreta = palavras[indice_sorteado];
}

void salva_arquivo(vector<string> nova_lista){
    ofstream arquivo;
    arquivo.open("palavras.txt");
    if(arquivo.is_open()){
        arquivo << nova_lista.size() << endl;

        for(string palavra : nova_lista){
            arquivo << palavra << endl;
        }
        arquivo.close();
    } 
    else{
        cout << "Não foi possivel acessar o banco de palavras" << endl;
        exit(0);
    }
    
}

void adiciona_palavra(){
    cout << "Digita a nova palavra usando letras maiúsculas" << endl;
    string nova_palavra;
    cin >> nova_palavra;

    vector<string> lista_palavras = le_arquivo();
    lista_palavras.push_back(nova_palavra);

    salva_arquivo(lista_palavras);
}

int main (){
    
    imprime_cabecalho();
   
    sorteia_palavra();
   
    while (nao_acertou() && nao_enforcou()){
        
        imprime_erros();
        imprime_palavra();
        chuta();
    }

    if(nao_acertou()){
        cout << "Você perdeu! Tente novamente" << endl;
    }
    else{
        cout << "Parabens! Você acertou a palavra secreta!";

        cout << "Você deseja adicionar nova palavra ao banco? (S/N)";
        char resposta;
        cin >> resposta;
        if(resposta = 'S'){
            adiciona_palavra();
        }
    }
    cout << endl;
    cout << "A Palavra Secreta era  " << palavra_secreta << endl;
    
    cout << endl;
    cout << "Fim de Jogo!" << endl;
}