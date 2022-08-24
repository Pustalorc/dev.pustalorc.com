import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import { themeDark } from "../utils";
import Head from "./common/head";
import Footer from "./common/footer";
import Header from "./common/header";
import PropTypes from "prop-types";

function PageFormat(props) {
    return (
        <>
            <Head />
            <ThemeProvider theme={themeDark}>
                <CssBaseline />
                <Header title={props.title}/>
                <br/>

                <Container maxWidth={false} sx={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column", minHeight: "calc(100vh - 176px)" }}>
                    {props.children}
                </Container>

                <br/>
                <Footer />
            </ThemeProvider>
        </>
    );
}
PageFormat.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
};

export default PageFormat;