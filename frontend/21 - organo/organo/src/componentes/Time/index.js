import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const cssTime = { backgroundColor: props.corSecundaria };
    const cssTimeH3 = {borderColor:props.corPrimaria};

    return (

        <section className='time' style={cssTime}>
            <h3 style={cssTimeH3}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}

export default Time;