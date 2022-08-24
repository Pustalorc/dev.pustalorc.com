import * as React from 'react';
import { Grid, Container, Typography } from '@mui/material'

function getYoE(props, customAlignment) {
    if (!props.YoE) {
        return
    }

    return (
        <Typography align={customAlignment} variant="body2" gutterBottom>
            Years of Experience: {props.YoE}
        </Typography>
    )
}

function getYearRange(props, customAlignment) {
    if (!props.StartYear)
        return
    
    if (!props.EndYear)
        return (
            <Typography align={customAlignment} variant="body2" gutterBottom>
                {props.StartYear}
            </Typography>
        )

    return (
        <Typography align={customAlignment} variant="body2" gutterBottom>
            {props.StartYear} - {props.EndYear}
        </Typography>
    )
}

function getPositionTitles(titles, customAlignment) {
    if (!Array.isArray(titles))
        return (
            <Typography align={customAlignment} variant="body2" gutterBottom>
               {titles}
            </Typography>
        )
    
    return titles.map((title) => {
        return (
            <Typography key={title} align={customAlignment} variant="body2" gutterBottom>
               {title}
            </Typography>
        )
    })
}

export default function ExperienceFormat(props) {
    let customXs = 4;
    let customAlignment = "center"
    let customVariant = "h5"

    if (props.xs)
        customXs = props.xs

    if (props.align)
        customAlignment = props.align

    if (props.variant)
        customVariant = props.variant

    return (
        <Grid item xs={customXs}>
            <Container maxWidth="sm">
                <Typography align={customAlignment} variant={customVariant} gutterBottom component="div">
                    {props.Title}
                </Typography>
                {getPositionTitles(props.PositionTitle, customAlignment)}
                {getYearRange(props, customAlignment)}
                {getYoE(props, customAlignment)}
            </Container>
        </Grid>
    )
}