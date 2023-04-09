import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/Personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-Mago.js";
import { Guerreiro } from "./modules/Guerreiro.js";

// const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
// const personagemJose = new Personagem('José', 3, 'Arqueiro');

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 8);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8); 
const guerreiraJorge = new Guerreiro('Jorge', 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiraJorge];

new PersonagemView(personagens).render();