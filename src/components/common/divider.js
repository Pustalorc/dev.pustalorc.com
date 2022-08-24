import * as React from 'react';
import { Divider as MuiDivider } from '@mui/material'
import { lightDivider } from '../../utils';

export default function Divider() {
    return (
        <div>
            <br/>
            <MuiDivider style={lightDivider} />
            <br/>
        </div>
    )    
}