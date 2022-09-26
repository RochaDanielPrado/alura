from validate_docbr import CPF, CNPJ

class Documento:

    @staticmethod
    def cria_documento(documento):
        if len(documento) == 11:
            return DocCpf(documento)
        elif len(documento) == 14:
            return DocCnpj(documento)
        else:
            raise ValueError('Quantidade de dígitos está incorreta!!')

class DocCpf:
    def __init__(self, documento):
        if self.valida_documento(documento):
            self.cpf = documento
        else:
            raise ValueError('CPF inválido!!')

    def __str__(self):
        return self.format()

    def valida_documento(self, documento):
        validador = CPF()  # da biblioteca cpf importada
        return validador.validate(documento)

    def format(self):
        mascara = CPF()
        return mascara.mask(self.cpf)


class DocCnpj:
    def __init__(self, documento):
        if self.valida_documento(documento):
            self.cnpj = documento
        else:
            raise ValueError('CNPJ inválido!!')

    def __str__(self):
        return self.format()

    def valida_documento(self, documento):
        validador = CNPJ()  # da biblioteca cpf importada
        return validador.validate(documento)

    def format(self):
        mascara = CNPJ()
        return mascara.mask(self.cnpj)


### o codigo abaixo funciona... No entanto
#### utilizaremos o métoto factory para melhorar o codigo
"""
class CpfCnpj:

    def __init__(self, documento, tipo_documento):
        self.tipo_documento = tipo_documento
        documento = str(documento)
        if self.tipo_documento == 'cpf':
            if self.cpf_eh_Valido(documento):
                self.cpf = documento
            else:
                raise ValueError('CPF inválido!!')
        elif self.tipo_documento == 'cnpj':
            if self.cnpj_eh_Valido(documento):
                self.cnpj = documento
            else:
                raise ValueError('CNPJ inválido!!')
        else:
            raise ValueError('Documento inválido!!')

    def __str__(self):
        if self.tipo_documento == 'cpf':
            return self.format_cpf()
        elif self.tipo_documento == 'cnpj':
            return self.format_cnpj()

    def cpf_eh_Valido(self, cpf):
        if len(cpf) == 11:
            validador = CPF() # da biblioteca cpf importada
            return validador.validate(cpf)
        else:
            raise ValueError('Quantidade de dígitos errada!!')

    def format_cpf(self):
        mascara = CPF()
        return mascara.mask(self.cpf)

    def cnpj_eh_Valido(self, cnpj):
        if len(cnpj) == 14:
            validador = CNPJ() # da biblioteca cnpj importada
            return validador.validate(cnpj)
        else:
            raise ValueError('Quantidade de dígitos errada!!')

    def format_cnpj(self):
        mascara = CNPJ()
        return mascara.mask(self.cnpj)
"""