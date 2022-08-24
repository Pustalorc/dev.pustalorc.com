import * as React from "react";
import { Grid, Container, Typography, Link } from "@mui/material";
import { centerJustified } from "../../utils";
import PropTypes from "prop-types";

function GetTitle(props) {
    if (props.TitleUrl) {
        return (
            <Link href={props.TitleUrl} underline="hover" color="#50f0ff">
                {props.Title}
            </Link>
        );
    }

    return props.Title;
}
GetTitle.propTypes = {
    TitleUrl: PropTypes.string,
    Title: PropTypes.string
};

function GetLicense(props) {
    if (!props.LicenseUrl) {
        return undefined;
    }

    return (
        <Link href={props.LicenseUrl} variant="caption" underline="hover" color="#50f0ff">
            {props.LicenseCode} License
        </Link>
    );
}
GetLicense.propTypes = {
    LicenseUrl: PropTypes.string,
    LicenseCode: PropTypes.string
};

function Project(props) {
    return (
        <Grid item>
            <Container maxWidth="sm">
                <Typography align="center" variant="h5" gutterBottom component="div">
                    {GetTitle(props)} {GetLicense(props)}
                </Typography>
                <Typography variant="body2" gutterBottom style={centerJustified} dangerouslySetInnerHTML={{__html: props.ShortDescription}} />
                <br/>
                <Typography variant="body2" gutterBottom style={centerJustified} dangerouslySetInnerHTML={{__html: props.FullDescription}} />
            </Container>
        </Grid>
    );
}
Project.propTypes = {
    ShortDescription: PropTypes.string,
    FullDescription: PropTypes.string,
    LicenseUrl: PropTypes.string,
    LicenseCode: PropTypes.string,
    TitleUrl: PropTypes.string,
    Title: PropTypes.string
};

export default Project;