import Botao from '../botao';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa';
import { useState } from 'react'
import './formulario.css'


const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }



    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Integrante</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite seu Nome" 
                    />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    placeholder="Digite seu Cargo" 
                    />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço de imagem"
                    obrigatorio={false}
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />  
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario