import pytest
from pytest import mark

from codigo.bytebank import Funcionario

class TestClass:
    def test_quando_idade_recebe_13_03_2000_deve_retornar_22(self):
        entrada = '13/03/2000' # Given-Contexto
        esperado = 22

        funcionario_teste = Funcionario('Teste', entrada, 1111)
        resultado = funcionario_teste.idade() # When-Ação

        assert resultado == esperado  # Then-Desfecho

    def test_quando_sobrenome_Lucas_Carvalho_deve_retornar_Carvalho(self):
        entrada = ' Lucas Carvalho  ' #Given
        esperado = 'Carvalho'

        lucas = Funcionario(entrada, '11/11/2000', 1111)
        resuldado = lucas.sobrenome() # When

        assert resuldado == esperado

    def test_quand_decresimo_salario_recebe_1000000_deve_retornar_90000(self):
        entada_nome = 'Paulo Bragança'
        entrada = 100000 #Given
        esperado = 90000

        funcionario_teste = Funcionario(entada_nome, '11/11/2000', entrada)
        funcionario_teste.decrescimo_salario() #When
        resultado = funcionario_teste.salario
        assert resultado == esperado

    @mark.calcular_bonus
    def test_quando_calcular_bonus_recebe_1000_deve_retornar_1000(self):

        entrada = 1000  # Given
        esperado = 100

        funcionario_teste = Funcionario('Teste', '11/11/2000', entrada)
        resultado = funcionario_teste.calcular_bonus() #When
        assert resultado == esperado #Then

    @mark.calcular_bonus
    def test_quando_calcular_bonus_recebe_1000000_deve_retornar_exception(self):
        with pytest.raises(Exception):
            entrada = 1000000  # Given

            funcionario_teste = Funcionario('Teste', '11/11/2000', entrada)
            resultado = funcionario_teste.calcular_bonus()  # When
            assert resultado  # Then
