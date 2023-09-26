import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cards from './Card';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <p>{children}</p>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { background: "#ffd65d" } }}>
                    <Tab label="Habilidades" {...a11yProps(0)} style={{ color: "black", fontWeight: "bold" }} />
                    <Tab label="Experiencia" {...a11yProps(1)} style={{ color: "black", fontWeight: "bold" }} />
                    <Tab label="Formacion complementaria" {...a11yProps(2)} style={{ color: "black", fontWeight: "bold" }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Cards
                    titulo="Desarrollo Web"
                    subtitulo="Frameworks para Desarrollo Web"
                    contenido={
                        <div>
                            <li>✅ Laravel</li>
                            <p>Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti". Fue creado en 2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra y ASP.NET MVC.​</p>
                            <li>✅ Angular</li>
                            <p>Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</p>
                        </div>}
                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Cards
                    titulo="Proyectos"
                    subtitulo="Camarero"
                    contenido={
                        <div>
                            <p>
                                <li><b>Eurostars Hotel Company - Valencia</b></li>
                                <li>Septiembre de 2018 - Presente</li><br/>
                                <li>Conocimiento de la carta con una selección de 60 platos.</li>
                                <li>Realización de 40 comandas diarias.</li>
                                <li>Recomendación de Vinos entre una selección de 25 botellas.</li>
                                <li>Organización y preparación de 50 mesas, colaborando con 5 camareros.</li>
                                <li>Gestión de pagos con facturas superiores a 300€.</li>
                                <li>Preparación del restaurante para eventos empresariales.</li></p>
                                <a href='https://github.com/Cesars2130/MediDocs' target="_blank">🔗 https://github.com/Cesars2130/MediDocs</a><br/>
                                <a href='https://github.com/monocoto3000/223238_MundoConstantino_Monica.git' target="_blank">🔗 https://github.com/monocoto3000/223238_MundoConstantino_Monica.git</a>
                        </div>
                    }
                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Cards
                    titulo="Google"
                    subtitulo="Certificado en Marketing Digital"
                    contenido={
                        <div>
                            <p>Programas de formación online flexibles y diseñados para adquirir competencias profesionales en campos de alta demanda y gran crecimiento como análisis de datos, ciberseguridad, soporte de tecnologías de la información, gestión de proyectos y diseño de experiencias de usuario, todos ellos disponibles en Coursera.org. No se necesita experiencia ni titulación previas.</p>
                        </div>
                    }
                />
                <Cards
                    subtitulo="Certificado profesional de Análisis de datos de Google"
                    contenido={
                        <div>
                            <p>Prepárate para un trabajo como analista de datos. En este programa, aprenderás a recopilar, transformar y organizar datos para ayudar a obtener nuevos conocimientos y tomar decisiones de negocio informadas.
                                Este programa es para ti si te gusta trabajar con números, descubrir tendencias y visualizar información .</p>
                        </div>
                    }
                />
                <Cards
                    subtitulo="Certificado profesional de Diseño de UX de Google"
                    contenido={
                        <div>
                            <p>Prepárate para un trabajo como diseñador de UX. En este programa, aprenderás los fundamentos del diseño de UX. sabrás como realizar investigaciones de usuarios y diseñar prototipos en herramientas como Figma y Adobe XD.
                                Este programa es para ti si te gusta pensar de forma creativa, el diseño y la investigación.</p>
                        </div>
                    }
                />
            </CustomTabPanel>
        </Box>
    );
}
