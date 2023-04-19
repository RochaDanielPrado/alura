import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const cssTime = { backgroundColor: props.corSecundaria };
    const cssTimeH3 = { borderColor: props.corPrimaria };

    return (

        <section className='time' style={cssTime}>
            <h3 style={cssTimeH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;