import * as React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ExperienceFormat from '../experienceFormat';

function ProgrammingFormat(props) {
    return (
        <ExperienceFormat
            xs={3}
            variant="body1"
            Title={props.Title}
            StartYear={props.StartYear}
            EndYear={props.EndYear}
        />
    )
}

export default function Programming() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Skills
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <ProgrammingFormat
                    Title="C# / .NET"
                    StartYear="2016"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="SQL / MySQL"
                    StartYear="2016"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="Web Development"
                    StartYear="2018"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="NodeJS"
                    StartYear="2019"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="ReactJS"
                    StartYear="2021"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="Python"
                    StartYear="2019"
                    EndYear="Today"
                />
                <ProgrammingFormat
                    Title="C/C++"
                    StartYear="2018"
                />
            </Grid>
        </Container>
    )
}