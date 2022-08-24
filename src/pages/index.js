import * as React from "react";
import PageFormat from "../components/format";
import { Grid, Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { CleanLink } from "../utils";

export default function IndexPage() {
    return (
        <PageFormat>
            <Grid container minHeight="40vw" direction="column" justifyContent="space-evenly" alignItems="center" rowSpacing={3}>
                <Grid item>
                    <Typography align="center" variant="h3">
                        Virtual Curriculum Vitae
                    </Typography>
                </Grid>
                <Grid item width="50vw">
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" rowSpacing={3} maxWidth="xl">
                        <Grid item maxWidth="xl">
                            <Typography align="center" component="div">
                                <CleanLink to="/projects">
                                    <Button fullWidth={true} sx={{ color: "white" }}>
                                        <Typography align="center" variant="h4">
                                            Projects
                                        </Typography>
                                    </Button>
                                </CleanLink>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" component="div">
                                <CleanLink to="/experience">
                                    <Button fullWidth={true} sx={{ color: "white" }}>
                                        <Typography align="center" variant="h4">
                                            Experience
                                        </Typography>
                                    </Button>
                                </CleanLink>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography align="center" component="div">
                        <Button fullWidth={true} href="https://github.com/Pustalorc" sx={{ color: "white" }}>
                            <Typography align="center" variant="h4">
                                Github <OpenInNewIcon fontSize="large" viewBox="12 -12 24 24" />
                            </Typography>
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </PageFormat>
    );
}