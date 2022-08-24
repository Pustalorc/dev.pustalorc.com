import * as React from "react";
import { Container, Grid, Link, Typography, AppBar, Toolbar } from "@mui/material";

export default function Footer() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid container rowSpacing={3} direction="row" justifyContent="space-evenly">
                        <Grid item>
                            <Typography variant="body1" align="left" color="inherit">
                                © 2022 - Vicente &quot;Pustalorc&quot; Pastor
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="center" color="inherit">
                                Contact: <Link href="mailto:contact@pustalorc.com" underline="hover" color="#50f0ff">E-Mail</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="right" color="inherit">
                                Created with <Link href="https://reactjs.org/" underline="hover" color="#50f0ff">React</Link>, <Link href="https://www.gatsbyjs.com/" underline="hover" color="#50f0ff">Gatsby</Link> & <Link href="https://mui.com/" underline="hover" color="#50f0ff">MaterialUI</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}