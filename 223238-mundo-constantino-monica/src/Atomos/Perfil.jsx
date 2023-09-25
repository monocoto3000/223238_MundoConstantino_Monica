import * as React from 'react';
import "./styles.css"

export default function FotoPerfil(props) {
    return (
        <img className='img-perfil' src={props.img} alt="Foto de perfil"/>
    )
}
