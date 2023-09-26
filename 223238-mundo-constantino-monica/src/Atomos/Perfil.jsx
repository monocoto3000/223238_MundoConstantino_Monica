import * as React from 'react';
import { Grid } from '@mui/material';
import Chips from './Chip';
import "./styles.css"

export default function FotoPerfil(props) {
    return (
        <>
            <Grid container spacing={1} display="row">
                <Grid item xs={5}>
                    <div className='contenedor'>
                        <img className='img-perfil' src={props.img} alt="Foto de perfil" />
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className='card'>
                        <p className='perfil'>Fecha de nacimiento</p>
                        <Chips chip={props.nacimiento} />
                        <p className='perfil'>Estado civil</p>
                        <Chips chip={props.civil} />
                        <p className='perfil'>Nacionalidad</p>
                        <Chips chip={props.nacionalidad} />
                        <p className='perfil'>Edad</p>
                        <Chips chip={props.edad} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
