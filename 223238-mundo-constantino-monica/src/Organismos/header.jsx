import * as React from 'react';
import Box from '@mui/material/Box';
import Cards from '../Moleculas/Card';
import Divisor from '../Atomos/Divider';
import NavTab from '../Moleculas/Tab';
import Chips from '../Atomos/Chip';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useEffect } from 'react';
import FotoPerfil from '../Atomos/Perfil';
import FotodePerfil from "./img/perfil.jpg";
import Facebook from "./img/facebook.png";
import GitHub from "./img/github.png";
import Instagram from "./img/instagram.png";
import Twitter from "./img/twitter.png";
import LinkedIn from "./img/linkedin.png"
import "./styles.css"
import Sociales from '../Atomos/Sociales';




export default function Header() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    function size() {
        console.log(window.innerWidth)
        if (screenSize.width < "1250") {
            return "column"
        } else {
            return "row"
        }
    }
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    width: 'fit-content',
                    padding: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}
            >
                <div>
                    <Grid container spacing={1} direction={size()}>
                        <Grid item xs={4}>
                            <Cards
                                titulo="Mónica Mundo Constantino"
                                subtitulo="Ingenieria en desarrollo de Software"
                            />
                            <FotoPerfil
                                img={FotodePerfil}
                                nacimiento="📅 31 de Febrero del 2027"
                                civil="❤️ Casado"
                                nacionalidad="📍México"
                                edad="🐣72 años"
                            />
                            <Cards
                                contenido={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia ex. In id dolor non mi blandit aliquet. Pellentesque eu vestibulum purus. Sed leo velit, cursus sit amet libero pellentesque, tempor lacinia erat."}
                            />
                        </Grid>
                        <Divisor></Divisor>
                        <Grid item xs={2}>
                            <Cards
                                titulo="Competencias"
                                subtitulo="Dominio de Lenguajes de programación"
                                contenido={<>
                                    <Chips chip="JavaScript ★★★★☆" />
                                    <Chips chip="Java ★★★☆☆" />
                                    <Chips chip="CSS ★★☆☆☆" />
                                    <Chips chip="C++ ★★★★☆" />
                                    <Chips chip="PHP ★★★☆☆" />
                                    <Chips chip="Phyton ★★★★★" />
                                </>}
                            />
                        </Grid>
                        <Divisor></Divisor>
                        <Grid item xs={3}>
                            <Cards
                                titulo="Formación Académica"
                                subtitulo="Titulación"
                                contenido="📜 Graduado de Universidad X"
                            />
                            <Cards
                                subtitulo="Especialidades"
                                contenido={
                                    <div>
                                        <li>💻 Especialidad en Desarrollo Web</li>
                                        <li>📱 Especialidad en Desarrollo Movil</li>
                                        <li>🕵️‍♀️ Especialidad en Seguridad informática</li>
                                    </div>}
                            />
                            <Cards
                                subtitulo="Idiomas"
                                contenido={<>
                                    <Chips chip="Ingles - Nivel B2 ★★★★☆" />
                                    <Chips chip="Frances ★★☆☆☆" />
                                    <Chips chip="Español ★★★★★" />
                                </>}
                            />
                        </Grid>
                        <Divisor></Divisor>
                        <Grid item>
                            <div style={{ display: "block" }}>
                                <Cards
                                    titulo="Contacto"
                                    contenido={<Sociales
                                        facebook={Facebook}
                                        facebookUser="FacebookUser"
                                        github={GitHub}
                                        githubUser="GitHubUser"
                                        instagram={Instagram}
                                        instagramUser="InstagramUser"
                                        linkedin={LinkedIn}
                                        linkedinUser="LinkedInUser"
                                        twitter={Twitter}
                                        twitterUser="TwitterUser"
                                        correo="⭐ Correo@gmail.com"
                                    ></Sociales>}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <NavTab></NavTab>
                </div>
            </Box >
        </div >
    );
}