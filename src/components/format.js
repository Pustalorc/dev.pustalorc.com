import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from '@mui/material';
import { themeDark } from "../utils";
import Head from "./common/head";
import Footer from "./common/footer";
import Header from "./common/header";

export default function PageFormat(props) {
    return (
        <>
        <Head />
            <ThemeProvider theme={themeDark}>
                <CssBaseline />
                <Header title={props.title}/>
                <br/>

                <Container maxWidth="lg" sx={{ display:"flex", flexDirection:"column", minHeight:"calc(100vh - 176px)" }}>
                    {props.children}
                </Container>

                <br/>
                <Footer />
            </ThemeProvider>
        </>
    )
}