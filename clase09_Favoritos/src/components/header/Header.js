import React from "react";
import Navegation from '../nav/Nav'


/* 
export default function Header (){
    return (
        <>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
        </>
    )
} 
*/


const Header = ({titulo, subtitulo}) => {
    //const {titulo, subtitulo} = props
    //const titulo = props.titulo
    //const subtitulo = props.subtitulo
    
    return (
        <>
            <h1 className="text-center">{titulo}</h1>
            <h2 className="text-center">{subtitulo}</h2>

            <Navegation/>
        </>
    )
}

export default Header;
