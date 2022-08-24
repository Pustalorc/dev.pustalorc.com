import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Project from "../project";

export default function Private() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h3" gutterBottom component="div">
                    Closed Source
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center">
                <Project
                    Title="Advanced Permissions"
                    ShortDescription="A sold plugin for Unturned that improved the permissions system on the RocketMod framework."
                    FullDescription="This project replaces the permissions system under the RocketMod framework in order to make the definitions of permissions more user friendly, robust and expandable. Currently a v3 is under progress, which is meant to outright become a permission framework of its own that can be used and supported in any game, framework, or system."
                />
                <Project
                    Title="Decay"
                    ShortDescription="A sold plugin for Unturned that improved the decay system from the game itself."
                    FullDescription="This project adds its own custom system to Unturned in order to decay buildables from the game in any way the final user desires. That could be that the buildable instantly gets destroyed if the user hasn't been online long enough, or that they receive damage over time, or maybe they want to do it to a whole base with protection."
                />
            </Grid>
        </Container>
    );
}