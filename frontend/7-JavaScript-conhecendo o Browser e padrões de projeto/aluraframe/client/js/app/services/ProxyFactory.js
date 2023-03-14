class ProxyFactory {
    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._ehfuncao(target[prop])) {

                    return function () {
                        //console.log(`interceptando ${prop} receiver ${receiver}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) acao(target);

                return retorno;

            }
        });
    }
    static _ehfuncao(func) {
        return typeof (func) == typeof(Function);
    }
}