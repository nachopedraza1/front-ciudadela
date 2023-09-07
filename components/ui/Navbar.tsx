import React from "react";
import Image from "next/image";

import { AppBar, Grid, Slide, Toolbar, useScrollTrigger } from "@mui/material";


interface Props {
    window?: () => Window;
}

export const Navbar = (props: Props) => {

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar>
                        <Grid container justifyContent="center" alignItems="center" >
                            <Image src='/logo.png' width={100} height={60} alt="Rick and Morty ciudadela" />
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </>
    );
}