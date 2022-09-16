
class Conta:

    def __init__(self, numero, titular, saldo = 0.0, limite = 1000.0):
        print("Construindo objeto... {}".format(self))

        # os atributos estao encapsulados (__numero).. So pode ser acessado pelo metodo correto
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print("Saldo {} do titular {}".format(self.__saldo, self.__titular))

    def deposita(self, valor):
        self.__saldo += valor

    def __pode_sacar(self, valor_a_sacar):
        return valor_a_sacar <= (self.__saldo + self.__limite)

    def saca(self, valor):
        if(self.__pode_sacar(valor)):
            self.__saldo -= valor
        else:
            print("O valor {} passou o limite".format(valor))

    def transfere(self, valor, destino):
        self.saca(valor)
        destino.deposita(valor)

    # Métodos: Getters e Setters
    def get_pega_saldo(self):
        return self.__saldo

    def get_devolve_titular(self):
        return self.__titular

    @property
    def limite(self):
        return self.__limite

    @limite.setter
    def limite(self, limite):
        self.__limite = limite

    @staticmethod
    def codigo_banco(): #static method (metodo da classe)  estatico
        return "001"


    @staticmethod
    def codigos_bancos():  # static method (metodo da classe)  estatico
        return {'BB': '001', 'Caixa': '104', 'Bradesco':'237'}
