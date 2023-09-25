import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cards from './Card';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

export default function NavTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Habilidades" value="1" />
                        <Tab label="Experiencia" value="2" />
                        <Tab label="Proyectos" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Cards
                        titulo="Desarrollo Web"
                        subtitulo="Frameworks para Desarrollo Web"
                        contenido={
                            <div>
                                <li>✅ Laravel</li>
                                <li>✅ Angular</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia ex. In id dolor non mi blandit aliquet. Pellentesque eu vestibulum purus. Sed leo velit, cursus sit amet libero pellentesque, tempor lacinia erat.</li>
                            </div>}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <Cards
                        titulo="Proyectos"
                        contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia ex. In id dolor non mi blandit aliquet. Pellentesque eu vestibulum purus. Sed leo velit, cursus sit amet libero pellentesque, tempor lacinia erat."
                    />
                </TabPanel>
                <TabPanel value="3">
                    <Cards
                        titulo="Idiomas"
                        contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia ex. In id dolor non mi blandit aliquet. Pellentesque eu vestibulum purus. Sed leo velit, cursus sit amet libero pellentesque, tempor lacinia erat."
                    />
                </TabPanel>
            </TabContext>
        </Box>
    );
}