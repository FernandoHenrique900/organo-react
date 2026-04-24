import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times =[
        'Programação','Front-End','Data Science','Devops','UX-Design','Mobile','Inovação-Gestão'
    ]

    return (
        <section className= "formulario">
            <form>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <ListaSuspensa label="Time" itens={times}/>       
            </form>
        </section>
    )
}
export default Formulario