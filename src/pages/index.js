import * as React from "react";
import PageFormat from "../components/format";
import { Grid, Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { CleanLink } from "../utils";

export default function IndexPage() {
    return (
        <PageFormat>
            <Grid container direction="row" justifyContent="center" alignItems="center" rowSpacing={30}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        Virtual Curriculum Vitae
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="center">
                        <CleanLink to="/projects">
                            <Button fullWidth={true} sx={{ color: "white" }}>
                                <Typography align="center" variant="h3">
                                    Projects
                                </Typography>
                            </Button>
                        </CleanLink>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="center">
                        <CleanLink to="/experience">
                            <Button fullWidth={true} sx={{ color: "white" }}>
                                <Typography align="center" variant="h3">
                                    Experience
                                </Typography>
                            </Button>
                        </CleanLink>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="center">
                        <Button fullWidth={true} href="https://github.com/Pustalorc" sx={{ color: "white" }}>
                            <Typography align="center" variant="h3">
                                Github <OpenInNewIcon fontSize="large" viewBox="12 -12 24 24" />
                            </Typography>
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </PageFormat>
    );
}