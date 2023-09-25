import * as React from 'react';
import Chip from '@mui/material/Chip';
export default function Chips(props) {
    return (
        <div style={{ margin: "10px" }}>
        <Chip label={props.chip} variant="outlined" />
        </div>
    );
  }