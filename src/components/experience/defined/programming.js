import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ExperienceFormat from "../experienceFormat";
import PropTypes from "prop-types";

function ProgrammingFormat(props) {
    return (
        <ExperienceFormat
            xs={3}
            variant="body1"
            Title={props.Name}
            StartYear={props.YoE + " Year(s) of Experience"}
        />
    );
}
ProgrammingFormat.propTypes = {
    Name: PropTypes.string,
    YoE: PropTypes.number
};

export default function Programming() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Skills
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" rowSpacing={3}>
                <ProgrammingFormat
                    Name="C# / .NET"
                    YoE={6}
                />
                <ProgrammingFormat
                    Name="SQL / MySQL"
                    YoE={6}
                />
                <ProgrammingFormat
                    Name="Web Development"
                    YoE={4}
                />
                <ProgrammingFormat
                    Name="JavaScript"
                    YoE={2}
                />
                <ProgrammingFormat
                    Name="NodeJS"
                    YoE={2}
                />
                <ProgrammingFormat
                    Name="ReactJS"
                    YoE={2}
                />
                <ProgrammingFormat
                    Name="Python"
                    YoE={2}
                />
                <ProgrammingFormat
                    Name="C/C++"
                    YoE={1}
                />
                <ProgrammingFormat
                    Name="Amazon Web Services"
                    YoE={1}
                />
                <ProgrammingFormat
                    Name="Docker"
                    YoE={1}
                />
            </Grid>
        </Container>
    );
}