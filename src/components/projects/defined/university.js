import * as React from "react";
import { Link, Container, Grid, Typography } from "@mui/material";
import Project from "../project";
import { renderToString } from "react-dom/server";

export default function University() {
    return (
        <Container>
            <Container>
                <Typography align="center" variant="h3" gutterBottom component="div">
                    University
                </Typography>
            </Container>
            <Grid container direction="row" justifyContent="center" rowSpacing={3}>
                <Project
                    Title="A Slack Chatbot"
                    ShortDescription="A chatbot for the chat platform Slack with features for students."
                    FullDescription="The features included: checking the local weather, setting up a youtube feed, setting up a twitter feed, and asking for mundane jokes."
                />
                <Project
                    Title="'My Music' Web Project"
                    ShortDescription={
                        "A web project developed with " +
                        renderToString(<Link href="https://koajs.com/" underline="hover" color="#50f0ff">Koa</Link>) +
                        "."
                    }
                    FullDescription="The website was a music sharing platform with ratings, comments, and playlists. However, due to obvious copyright issues, it was never fully publicised and was left as private work for university grading only."
                />
                <Project
                    Title="Web-API Project"
                    ShortDescription={
                        "Another web project with a focus on a split between the back-end and front-end. " +
                        "Back-end was developed with " +
                        renderToString(<Link href="https://koajs.com/" underline="hover" color="#50f0ff">Koa</Link>) +
                        ", whilst frontend was developed with " +
                        renderToString(<Link href="https://reactjs.org/" underline="hover" color="#50f0ff">React</Link>) +
                        "."
                    }
                    FullDescription="The website was meant to provide a service for gym memberships for a fictional gym. It supported account creation, staff account creation, class creation, and an application creation (course sign-up)."
                />
            </Grid>
        </Container>
    );
}