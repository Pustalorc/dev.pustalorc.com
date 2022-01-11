import * as React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid, Link, CssBaseline, Divider, Typography, AppBar, Toolbar } from '@mui/material'
import { Helmet } from 'react-helmet';

const centerJustified = {
    textAlign: "justify",
    textAlignLast: "center",
}

const lightDivider = {
    borderColor: "rgba(255, 255, 255, 0.12)",
}

const themeDark = createTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const IndexPage = () => {
  return (
    <html lang="en">
        <Helmet>
            <meta name="description" content="Developer Portfolio for Vicente 'Pustalorc' Pastor"/>
            <title>Developer Portfolio</title>
        </Helmet>
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <Container style={centerJustified}>
                <br/>
                <Container>
                    <Typography variant="h3" gutterBottom component="div">
                        Open-Sourced Projects
                    </Typography>
                </Container>
                <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                <Link href="https://github.com/Pustalorc/BaseClustering" underline="hover" color="#50f0ff">Base Clustering</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                An Unturned Plugin that groups up barricades & structures around the map to define a player built base.
                            </Typography>
                            <br/>
                            <Typography variant="body2" gutterBottom>
                                The aim of this project was to solve something that had not been done before in the Unturned community: How do we define a base or how can we tell what is a base, from a list of elements?
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                <Link href="https://github.com/Pustalorc/FrequencyCache" underline="hover" color="#50f0ff">Frequency Access Cache</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A published NuGet project that aims to create a basic in-memory cache of any input generic type.
                            </Typography>
                            <br/>
                            <Typography variant="body2" gutterBottom>
                                The aim of this project is to make the development of any other product that requires a basic cache a matter of simple class instantiation and simple method calls.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                <Link href="https://github.com/Pustalorc/MySqlConnectorWrappers" underline="hover" color="#50f0ff">MySql Connector Wrappers</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A set of published NuGet libraries for both MySql.Data and MySqlConnector that implements the <Link href="https://github.com/Pustalorc/FrequencyCache" underline="hover" color="#50f0ff">Frequency Access Cache</Link> project for built in query + query result caching.
                            </Typography>
                            <br/>
                            <Typography variant="body2" gutterBottom>
                                The aim of this project is making the development of any product that utilizes or requires a MySql database a much simpler experience.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                <Link href="https://github.com/openmod/openmod" underline="hover" color="#50f0ff">OpenMod</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Contributed to the OpenMod project, with: minor changes, bug fixes, and the Buildables Abstraction with events.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                <Link href="https://pustalorc.github.io/UnturnedServerManager/" underline="hover" color="#50f0ff">Unturned Server Manager</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A lightweight windows application to make creating, running, and modifying unturned servers a simple user experience.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
                <br/>
                <Divider style={lightDivider} />
                <br/>
                <Container>
                    <Typography variant="h3" gutterBottom component="div">
                        Closed-Sourced Projects
                    </Typography>
                </Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                Advanced Permissions
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A sold plugin for Unturned that improved the permissions system on the RocketMod framework.
                            </Typography>
                            <br/>
                            <Typography variant="body2" gutterBottom>
                                The aim of this project is to replace the permissions provider in RocketMod as well as its definitions for something more robust, user friendly, and expandable.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                Decay
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A sold plugin for Unturned that improved the decay system from the game itself.
                            </Typography>
                            <br/>
                            <Typography variant="body2" gutterBottom>
                                The aim of this project is to improve the decay system from the game, and expand it to allow users to select and make their own customized decays for their servers.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
                <br/>
                <Divider style={lightDivider} />
                <br/>
                <Container>
                    <Typography variant="h3" gutterBottom component="div">
                        University Projects
                    </Typography>
                </Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                A Slack Chatbot
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A chatbot for the platform Slack with multiple features that students could utilize for checking the local weather, setting up a youtube feed, or twitter feed, or even asking for mundane jokes.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                "My Music" Web Project
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A web project developed with <Link href="https://koajs.com/" underline="hover" color="#50f0ff">Koa</Link>.
                            </Typography>
                            <br />
                            <Typography variant="body2" gutterBottom>
                                The website was meant to create a music sharing platform with ratings, comments, and playlists.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom component="div">
                                Web-API Project
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Another web project with a focus on a split between the back-end and front-end.
                                Back-end was developed with <Link href="https://koajs.com/" underline="hover" color="#50f0ff">Koa</Link>, whilst frontend was developed with <Link href="https://reactjs.org/" underline="hover" color="#50f0ff">React</Link>.
                            </Typography>
                            <br />
                            <Typography variant="body2" gutterBottom>
                                The website was meant to provide a service for gym memberships for a fictional gym named "Your Local Gym".
                                It supported account creation, staff account creation, class creation, and an (sign-up) application creation.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Divider style={lightDivider} />
            <br />
            <Container>
                <Container>
                    <Typography align="center" variant="h4" gutterBottom component="div">
                        Studies
                    </Typography>
                </Container>
                <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={12}>
                        <Typography align="center" variant="h5" gutterBottom component="div">
                            Computer Science BSc
                        </Typography>
                        <Typography align="center" variant="body1" gutterBottom>
                            Studied at Coventry University
                        </Typography>
                        <Typography align="center" variant="body2" gutterBottom>
                            2018-2022
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Container>
                    <Typography align="center" variant="h4" gutterBottom component="div">
                        Programming Expertise
                    </Typography>
                </Container>
                <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <Typography align="right" variant="h5" gutterBottom component="div">
                            Middle Developer
                        </Typography>
                        <Typography align="right" variant="body1" gutterBottom>
                            C#/.Net Framework
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography align="left" variant="h5" gutterBottom component="div">
                            Junior Developer
                        </Typography>
                        <Typography align="left" variant="body1">
                            Python
                        </Typography>
                        <Typography align="left" variant="body1">
                            Web Development
                        </Typography>
                        <Typography align="left" variant="body1" gutterBottom>
                            C/C++
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Container>
                    <Typography align="center" variant="h4" gutterBottom component="div">
                        Language Qualifications
                    </Typography>
                </Container>
                <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={5}>
                        <Typography align="right" variant="h5" gutterBottom component="div">
                            English
                        </Typography>
                        <Typography align="right" variant="body1" gutterBottom>
                            IELTS 7.5 - 2018
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography align="center" variant="h5" gutterBottom component="div">
                            French
                        </Typography>
                        <Typography align="center" variant="body1">
                            DELF B1
                        </Typography>
                    </Grid>
                    <Grid item sm={5}>
                        <Typography align="left" variant="h5" gutterBottom component="div">
                            Spanish
                        </Typography>
                        <Typography align="left" variant="body1">
                            Native Speaker
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <AppBar position="static" color="transparent">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid container rowSpacing={3} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item sm={4}>
                                <Typography variant="body1" align='left' color="inherit">
                                    © 2022 - Vicente "Pustalorc" Pastor
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="body1" align='center' color="inherit">
                                    Contact: <Link href="mailto:contact@pustalorc.com" underline="hover" color="#50f0ff">E-Mail</Link> | <Link href="https://www.linkedin.com/in/vicente-p-676002173/" underline="hover" color="#50f0ff">LinkedIn</Link>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="body1" align='right' color="inherit">
                                    Created with <Link href="https://reactjs.org/" underline="hover" color="#50f0ff">ReactJs</Link>, <Link href="https://www.gatsbyjs.com/" underline="hover" color="#50f0ff">Gatsby</Link> & <Link href="https://mui.com/" underline="hover" color="#50f0ff">MaterialUI</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    </html>
  )
}

export default IndexPage