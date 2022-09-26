
class Datas:

    def __init__(self, dd, mm, yyyy):

    self.dia = dd
    self.mes = mma
    self.ano = yyyy

    def formatada(self):
        print("{:02d}/{:02d}/{}".format(self.dia, self.mes, self.ano))