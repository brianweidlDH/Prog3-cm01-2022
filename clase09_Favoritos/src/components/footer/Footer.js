import './Footer.css'

export default function Footer(){

    //const estilo = 
    const textoPie = "Creado por @adrgon"
    const pepito = {
        textAlign: 'center'
    }

    

    return (
        <div className="footer" style={pepito} role="alert">
            {textoPie}
        </div>
    )
}
