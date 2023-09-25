import * as React from 'react';
import "./styles.css"

export default function Cards(props) {
    console.log(props)
    return (
            <div className='card'>
                <h2>{props.titulo}</h2>
                <h4>{props.subtitulo}</h4>
                <p>{props.contenido}</p>
            </div>
    )
}
