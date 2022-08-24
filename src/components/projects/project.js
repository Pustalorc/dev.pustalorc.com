import * as React from 'react';
import { Grid, Container, Typography, Link } from '@mui/material'
import { centerJustified } from '../../utils';

function GetTitle(props) {
    if (props.TitleUrl) {
        return (
            <Link href={props.TitleUrl} underline="hover" color="#50f0ff">
                {props.Title}
            </Link>
        )
    }

    return props.Title
}

function GetLicense(props) {
    if (!props.LicenseUrl)
        return;
    
    return (
        <Link href={props.LicenseUrl} variant="caption" underline="hover" color="#50f0ff">
            {props.LicenseCode} License
        </Link>
    )
}

export default function Project(props) {
    let customXs = 6;

    if (props.xs)
        customXs = props.xs;

    return (
        <Grid item xs={customXs}>
            <Container maxWidth="sm">
                <Typography align="center" variant="h5" gutterBottom component="div">
                    {GetTitle(props)} {GetLicense(props)}
                </Typography>
                <Typography variant="body2" gutterBottom style={centerJustified} dangerouslySetInnerHTML={{__html: props.ShortDescription}} />
                <br/>
                <Typography variant="body2" gutterBottom style={centerJustified} dangerouslySetInnerHTML={{__html: props.FullDescription}} />
            </Container>
        </Grid>
    )
}