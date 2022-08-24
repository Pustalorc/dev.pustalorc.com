import * as React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ExperienceFormat from '../experienceFormat';

function LanguageFormat(props) {
    return (
        <ExperienceFormat
            xs={2}
            Title={props.Language}
            StartYear={props.YearAcchieved}
            PositionTitle={props.Certification}
        />
    )
}

export default function Languages() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Language Qualifications
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <LanguageFormat
                    Language="English"
                    YearAcchieved="2018"
                    Certification="IELTS"
                />
                <LanguageFormat
                    Language="French"
                    Certification="DELF B1"
                />
                <LanguageFormat
                    Language="Spanish"
                    Certification="Native Speaker"
                />
            </Grid>
        </Container>
    )
}