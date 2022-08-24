import * as React from "react";
import { AppBar, Grid, Toolbar, Container, Button } from "@mui/material";
import { CleanLink } from "../../utils";

const pages = [ "projects", "experience" ];

export default function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row" justifyContent="center">
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
