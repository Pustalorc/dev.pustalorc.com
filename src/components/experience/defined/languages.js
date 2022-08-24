import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ExperienceFormat from "../experienceFormat";
import PropTypes from "prop-types";

function LanguageFormat(props) {
    return (
        <ExperienceFormat
            Title={props.Language}
            StartYear={props.YearAcchieved}
            PositionTitle={props.Certification}
        />
    );
}
LanguageFormat.propTypes = {
    Language: PropTypes.string,
    YearAcchieved: PropTypes.string,
    Certification: PropTypes.string
};

export default function Languages() {
    return (
        <Container maxWidth="xl">
            <Typography align="center" variant="h4" gutterBottom component="div">
                Language Qualifications
            </Typography>
            <Grid container direction="row" justifyContent="center" rowSpacing={3}>
                <LanguageFormat
                    Language="English"
                    YearAcchieved="2018"
                    Certification="IELTS"
                />
                <LanguageFormat
                    Language="French"
                    Certification="DELF B1"
                    YearAcchieved="2018"
                />
                <LanguageFormat
                    Language="Spanish"
                    Certification="Native Speaker"
                />
            </Grid>
        </Container>
    );
}