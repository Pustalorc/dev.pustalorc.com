import * as React from "react";
import { AppBar, Grid, Toolbar, Container, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { CleanLink } from "../../utils";

const pages = [ "projects", "experience" ];

export default function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" justifyContent="center">
                                <Grid item>
                                    <CleanLink to={"/"}>
                                        <Button sx={{ color: "white" }}>
                                            Home Page
                                        </Button>
                                    </CleanLink>
                                </Grid>
                                {pages.map((page) => (
                                    <Grid item key={page}>
                                        <CleanLink to={"/" + page}>
                                            <Button sx={{ color: "white" }}>
                                                {page}
                                            </Button>
                                        </CleanLink>
                                    </Grid>
                                ))}
                                <Grid item>
                                    <Button href="https://github.com/Pustalorc" sx={{ color: "white" }}>
                                        Github <OpenInNewIcon fontSize="small" viewBox="12 -12 24 24" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
