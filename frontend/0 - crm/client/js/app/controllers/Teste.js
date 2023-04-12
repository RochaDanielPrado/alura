"use strict";

System.register(["../models/Mensagem.js", "../views/MensagemView.js", "../helpers/Bind.js"], function (_export, _context) {
    "use strict";

    var Mensagem, MensagemView, Bind, Teste;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsMensagemJs) {
            Mensagem = _modelsMensagemJs.Mensagem;
        }, function (_viewsMensagemViewJs) {
            MensagemView = _viewsMensagemViewJs.MensagemView;
        }, function (_helpersBindJs) {
            Bind = _helpersBindJs.Bind;
        }],
        execute: function () {
            Teste = function Teste() {
                _classCallCheck(this, Teste);

                this._mensagem = new Bind(new Mensagem(), new MensagemView($("#mensagemView")), "texto");

                this._mensagem.texto = "Teste Babel";
            };
        }
    };
});
//# sourceMappingURL=Teste.js.map