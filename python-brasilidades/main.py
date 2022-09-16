import re
from telefones import TelefonesBr

telefone = '5537998445678'
print('telefone:', telefone)

telefone_objeto = TelefonesBr(telefone)


print('numero formatado:', telefone_objeto.format_numero())