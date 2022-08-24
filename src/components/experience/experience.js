import * as React from 'react';
import { Container } from '@mui/material';
import Divider from "../common/divider";
import Work from "./defined/work"
import Studies from "./defined/studies"
import Programming from "./defined/programming"
import Languages from "./defined/languages"

export default function Experience() {
    return (
        <Container>
            <Work />
            <Divider />
            <Studies />
            <Divider />
            <Programming />
            <Divider />
            <Languages />
        </Container>
    )
}