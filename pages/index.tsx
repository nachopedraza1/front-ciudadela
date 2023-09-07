import { GetStaticProps, NextPage } from "next";

import { TableHumans } from "@/components/home";
import { MainLayout } from "@/components/layouts";
import { Box, Container, Typography } from '@mui/material';

import styles from '../styles/home.module.css';

const HomePage: NextPage = () => {

  return (
    <MainLayout>

      <Box className={styles.background}>
        <Typography variant="h2" mb={3}> Humans | Rick And Morty </Typography>
      </Box>

      <Container>
        <TableHumans />
      </Container>

    </MainLayout>
  )
}


export default HomePage;