import * as React from 'react';
import PageFormat from "../components/format";
import { Grid, Container } from '@mui/material';
import { CleanLink } from '../utils';

export default function IndexPage() {
    return (
        <PageFormat>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Container>
                        <CleanLink to="/projects">Projects</CleanLink>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <CleanLink to="/experience">Experience</CleanLink>
                    </Container>
                </Grid>
            </Grid>
        </PageFormat>
    )
}