import Image from 'next/image';
import { Grid } from '@mui/material';

export const Footer = () => {
    return (
        <Grid container bgcolor='#272727' mt={2}>
            <Grid container justifyContent="center" alignItems="center" >
                <Image src='/logo.png' width={100} height={60} alt="Rick and Morty ciudadela" />
            </Grid>
        </Grid>
    )
}
