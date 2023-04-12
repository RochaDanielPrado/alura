"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, DateHelper;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("DateHelper", DateHelper = function () {
                function DateHelper() {
                    _classCallCheck(this, DateHelper);

                    throw new Error("DateHelper n\xE3o pode ser instanciada [static]");
                }

                //static - métodos que podem ser envocados diretamente na classe - sem instancia


                _createClass(DateHelper, null, [{
                    key: "dataParaTexto",
                    value: function dataParaTexto(data) {

                        var dia = String(new Date(data).getDate()).padStart(2, "0");
                        var mes = String(new Date(data).getMonth() + 1).padStart(2, "0");

                        return dia + "/" + mes + "/" + new Date(data).getFullYear();
                    }
                }, {
                    key: "textoParaData",
                    value: function textoParaData(texto) {
                        // Valida com Templete String
                        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error("Deve estar no formato aaaa-mm-dd");

                        return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split("-").map(function (item, indice) {
                            return item - indice % 2;
                        })))))();
                    }
                }]);

                return DateHelper;
            }());

            _export("DateHelper", DateHelper);
        }
    };
});
//# sourceMappingURL=DateHelper.js.map