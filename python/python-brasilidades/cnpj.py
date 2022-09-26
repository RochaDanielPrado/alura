from validate_docbr import CNPJ

class Cnpj:

    def __init__(self, documento):
        documento = str(documento)
        if self.cnpj_eh_Valido(documento):
            self.cnpj = documento
        else:
            raise ValueError('CNPJ inválido!!')

    def __str__(self):
        return self.format_cnpj()

    def cnpj_eh_Valido(self, documento):
        if len(documento) == 14:
            validador = CNPJ() # da biblioteca cpf importada
            return validador.validate(documento)
        else:
            raise ValueError('Quantidade de dígitos errada!!')

    def format_cnpj(self):
        mascara = CNPJ()
        return mascara.mask(self.cnpj)