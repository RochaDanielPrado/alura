from linkedin_api import Linkedin

#username = input('Entre com seu email Linkedin')
#password = input('Entre com sua senha Linkedin')

username = 'daniel.rocha@rocce.com.br'
password = 'Rocce@0802'

api = Linkedin(username, password)

contato = input('Entre com o Username')
print(api.get_profile(contato))
