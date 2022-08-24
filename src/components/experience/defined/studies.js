import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ExperienceFormat from "../experienceFormat";

export default function Studies() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Studies
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" rowSpacing={3}>
                <ExperienceFormat
                    xs={12}
                    Title="BSc Computer Science"
                    StartYear="2018"
                    EndYear="2022"
                    PositionTitle="Coventry University"
                />
            </Grid>
        </Container>
    );
}