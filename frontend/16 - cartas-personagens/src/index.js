import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/Personagem-view.js";
import { Mago } from "./modules/Mago.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('José', 3, 'Arqueiro');

console.log(`Insignia de ${personagemPedrinho.nome}:  ${personagemPedrinho.obterInsignia()}`);
console.log(`Insignia de ${personagemJose.nome}:  ${personagemJose.obterInsignia()}`);

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();
