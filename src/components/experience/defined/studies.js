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
            <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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