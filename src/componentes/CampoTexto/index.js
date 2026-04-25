import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada =`${props.placeholder}...`

    //let valor='It-A Coisa'

   const [valor, setValor] = useState('It-A Coisa')

    const aoDigitado = (evento) =>{
        setValor(evento.target.value)
        console.log(valor)
    }

    return(
        <div className="campo-texto">
            <label> {props.label }</label> 
            <input value={valor}    
            onChange={aoDigitado}
            required={props.obrigatorio} 
            placeholder={placeholderModificada}/>   
        </div>
    )
}

export default CampoTexto