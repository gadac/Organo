import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{color:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>            
                {props.colaboradores.map( colaborador => <Colaborador
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    time={colaborador.time}
                />)}
            </div>
        </section> 
    )
}

export default Time