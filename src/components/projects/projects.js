import * as React from "react";
import Public from "./defined/public";
import Private from "./defined/private";
import University from "./defined/university";
import Divider from "../common/divider";
import { Container } from "@mui/material";

export default function Projects() {
    return (
        <Container maxWidth="xl">
            <Public />
            <Divider />
            <Private />
            <Divider />
            <University />
        </Container>
    );
}