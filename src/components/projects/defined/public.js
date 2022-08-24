import * as React from "react";
import { renderToString } from "react-dom/server";
import { Container, Grid, Typography, Link } from "@mui/material";
import Project from "../project";

export default function Public() {
    return (
        <Container>
            <Typography align="center" variant="h3" gutterBottom component="div">
                Open Source
            </Typography>
            <Grid container direction="row" justifyContent="center" rowSpacing={3}>
                <Project
                    TitleUrl="https://github.com/Pustalorc/BaseClustering"
                    Title="Base Clustering"
                    LicenseUrl="https://github.com/Pustalorc/BaseClustering/blob/master/LICENSE.md"
                    LicenseCode="LGPL-3.0"
                    ShortDescription="An Unturned Plugin that groups up barricades & structures around the map to define a player built base."
                    FullDescription="This project was meant to provide the ability to define, use, interact, and modify as one wants a player built base within the game 'Unturned'. It uses primitive clustering methods, as none of the objects are linked or related, so all of them have to be investigated."
                />
                <Project
                    TitleUrl="https://github.com/Pustalorc/RocketModCommandsExtended"
                    Title="RocketMod Commands Extended"
                    LicenseUrl="https://github.com/Pustalorc/RocketModCommandsExtended/blob/master/LICENSE.md"
                    LicenseCode="LGPL-3.0"
                    ShortDescription="A NuGet library that is meant to provide abstractions to improve and extend RocketMod's commands."
                    FullDescription="This project is made to standarize commands, as well as make them a lot easier to work with. It brings translations built into the commands themselves, multithreading and asynchronous support, and automatic parsing of commands into them. This allows a developer to significantly speed up development of commands, as they no longer have to write multiple if statements and custom checks for the command arguments, the translations, or if their code needs to run on a separate thread."
                />
                <Project
                    TitleUrl="https://github.com/Pustalorc/DbConnectionWrapper"
                    Title="DbConnection Wrapper"
                    LicenseUrl="https://github.com/Pustalorc/DbConnectionWrapper/blob/master/LICENSE.md"
                    LicenseCode="MIT"
                    ShortDescription="A NuGet library that provides abstractions for any database connections to reduce copy pasted code."
                    FullDescription={
                        "This project was split from MySqlConnectorWrapper as to provide a fully globally compatible wrapper for any database connection libraries that inherit from ADO.NET's " +
                        renderToString(<Link href="https://docs.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection" underline="hover" color="#50f0ff">DbConnection class</Link>) +
                        ". It currently supports running all queries asynchronously, running queries in parallel, automatic rollbacks on transactions in the case of an issue, and a conversion from an open reader to in memory structured data of a reader's result."
                    }
                />
                <Project
                    TitleUrl="https://github.com/Pustalorc/MySqlConnectorWrapper"
                    Title="MySql Connector Wrapper"
                    LicenseUrl="https://github.com/Pustalorc/MySqlConnectorWrapper/blob/master/LICENSE.md"
                    LicenseCode="MIT"
                    ShortDescription={
                        "A NuGet library that abstracts both " +
                        renderToString(<Link href="https://www.nuget.org/packages/MySql.Data/" underline="hover" color="#50f0ff">MySql.Data</Link>) +
                        " and " +
                        renderToString(<Link href="https://www.nuget.org/packages/MySqlConnector/" underline="hover" color="#50f0ff">MySqlConnector</Link>)
                    }
                    FullDescription="This project utilizes the previously mentioned DbConnection Wrapper, and is intended to be an implementation of that abstraction for MySql specifically."
                />
                <Project
                    TitleUrl="https://github.com/openmod/openmod"
                    Title="OpenMod"
                    LicenseUrl="https://github.com/openmod/openmod/blob/main/LICENSE"
                    LicenseCode="MIT/Custom"
                    ShortDescription="Contributed to the OpenMod project."
                    FullDescription="OpenMod, as best described by the creators: 'OpenMod is a plugin framework for .NET. It supports authorization, plugin configurations, internalization, command handling and much more. OpenMod can be used for games, bot frameworks, web servers or anything else.' My contributions are buildable abstractions, and their implementation for the Unturned OpenMod framework."
                />
                <Project
                    TitleUrl="https://github.com/Pustalorc/UnturnedServerManager"
                    Title="Unturned Server Manager"
                    LicenseUrl="https://github.com/Pustalorc/UnturnedServerManager/blob/master/LICENSE.md"
                    LicenseCode="GPL-3.0"
                    ShortDescription="A lightweight windows application to make creating, running, and modifying unturned servers a simple user experience."
                    FullDescription="This project is one of my first C#/.NET projects and I have used it to show my learning progress with .NET, as well as with programming in general. The program still functions as intended, but might have some slight issues, as it is currently unmaintained."
                />
            </Grid>
        </Container>
    );
}