import extrator_url

url = "bytebank.com/cambio?quantidade=6550&moedaOrigem=dolar&moedaDestino=real"
extrator_url = extrator_url.ExtratorURL(url)

VALOR_DOLAR = 5.50  # 1 dólar = 5.50 reais
moeda_origem = extrator_url.get_valor_parametro("moedaOrigem")
moeda_destino = extrator_url.get_valor_parametro("moedaDestino")
quantidade = extrator_url.get_valor_parametro("quantidade")

if moeda_origem == 'dolar' and moeda_destino == 'real':
    conversao = float(quantidade) * VALOR_DOLAR
    print(f'O valor de {quantidade} $ convertido em R$ é: ' + str(conversao))
elif moeda_origem == 'real' and moeda_destino == 'dolar':
    conversao = float(quantidade) / VALOR_DOLAR
    print(f'O valor de {quantidade} R$ convertido em $ é: ' + str(conversao))
else:
    print(f'Não é possível converter. Reveja os parametros')
