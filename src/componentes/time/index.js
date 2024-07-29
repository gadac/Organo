import './time.css'

const Time = (props) => {
    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{color:props.corPrimaria}}>{props.nome}</h3>
        </section> 
    )
}

export default Time