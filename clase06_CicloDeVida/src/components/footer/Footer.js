export default function Footer(){

    //const estilo = 
    const textoPie = "Creado por @adrgon"
    const pepito = {
        textAlign: 'center'
    }

    

    return (
        <div className="alert alert-warning" style={pepito} role="alert">
            {textoPie}
        </div>
    )
}
