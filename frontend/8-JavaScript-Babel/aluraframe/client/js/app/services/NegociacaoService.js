"use strict";

System.register(["./HttpService.js", "../models/Negociacao.js", "../dao/NegociacaoDao.js", "./ConnectionFactory.js"], function (_export, _context) {
    "use strict";

    var HttpService, Negociacao, NegociacaoDao, ConnectionFactory, _createClass, NegociacaoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_HttpServiceJs) {
            HttpService = _HttpServiceJs.HttpService;
        }, function (_modelsNegociacaoJs) {
            Negociacao = _modelsNegociacaoJs.Negociacao;
        }, function (_daoNegociacaoDaoJs) {
            NegociacaoDao = _daoNegociacaoDaoJs.NegociacaoDao;
        }, function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("NegociacaoService", NegociacaoService = function () {
                function NegociacaoService() {
                    _classCallCheck(this, NegociacaoService);

                    this._http = new HttpService();
                }

                _createClass(NegociacaoService, [{
                    key: "obterNegociacoesDaSemana",
                    value: function obterNegociacoesDaSemana() {

                        return this._http.get('negociacoes/semana').then(function (negociacoes) {
                            //console.log(negociacoes);
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter as negociações da semana');
                        });
                    }
                }, {
                    key: "obterNegociacoesDaSemanaAnterior",
                    value: function obterNegociacoesDaSemanaAnterior() {

                        return this._http.get('negociacoes/anterior').then(function (negociacoes) {
                            //console.log(negociacoes);
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter as negociações da semana anterior');
                        });
                    }
                }, {
                    key: "obterNegociacoesDaSemanaRetrasada",
                    value: function obterNegociacoesDaSemanaRetrasada() {

                        return this._http.get('negociacoes/retrasada').then(function (negociacoes) {
                            //console.log(negociacoes);
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter as negociações da semana retrasada');
                        });
                    }
                }, {
                    key: "obterNegociacoes",
                    value: function obterNegociacoes() {

                        return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(function (periodos) {

                            var negociacoes = periodos.reduce(function (dados, periodo) {
                                return dados.concat(periodo);
                            }, []).map(function (dado) {
                                return new Negociacao(new Date(dado.data), dado.quantidade, dado.valor);
                            });

                            return negociacoes;
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: "cadastra",
                    value: function cadastra(negociacao) {

                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(negociacao);
                        }).then(function () {
                            return "Negocia\xE7\xE3o adicionada com sucesso";
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error("N\xE3o foi poss\xEDvel adicionar a negocia\xE7\xE3o");
                        });
                    }
                }, {
                    key: "lista",
                    value: function lista() {

                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es");
                        });
                    }
                }, {
                    key: "apaga",
                    value: function apaga() {

                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).then(function () {
                            return "Negocia\xE7\xF5es apagadas com sucesso";
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error("N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es");
                        });
                    }
                }, {
                    key: "importa",
                    value: function importa(listaAtual) {

                        return this.obterNegociacoes().then(function (negociacoes) {
                            return negociacoes.filter(function (negociacao) {
                                return !listaAtual.some(function (negociacaoExistente) {
                                    return JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente);
                                });
                            });
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error("N\xE3o foi poss\xEDvel buscar negocia\xE7\xF5es para importar");
                        });
                    }
                }]);

                return NegociacaoService;
            }());

            _export("NegociacaoService", NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map