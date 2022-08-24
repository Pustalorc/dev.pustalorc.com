import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ExperienceFormat from "../experienceFormat";
import PropTypes from "prop-types";

function WorkFormat(props) {
    return (
        <ExperienceFormat
            xs={3}
            Title={props.Company}
            StartYear={props.StartYear}
            EndYear={props.EndYear}
            PositionTitle={props.PositionTitle}
        />
    );
}
WorkFormat.propTypes = {
    Company: PropTypes.string,
    StartYear: PropTypes.string,
    EndYear: PropTypes.string,
    PositionTitle: PropTypes.string
};

export default function Work() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Professional / Working
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" >
                <WorkFormat
                    Company="Grant Thornton"
                    StartYear="2022"
                    EndYear="Today"
                    PositionTitle="Developer"
                />
                <WorkFormat
                    Company="Self-Employed"
                    StartYear="2016"
                    EndYear="Today"
                    PositionTitle="Software Engineer"
                />
            </Grid>
        </Container>
    );
}