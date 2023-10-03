import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BeerCard from './components/BeerCard';
import { Avatar, CircularProgress, Stack, Typography } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useGetBeersMutation } from '../../hooks/beersMutation';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import { TopBar } from '../../components/TopBar';
import Lottie from "lottie-react";
import loadingAnimation from '../../animations/loading.json'
import { Beer } from '../../@types/Beer';

export function BeersScreen() {
    const theme = useTheme();
    const [page, setPage] = useState(1)
    const [beers, setBeers] = useState<Beer[]>([]);

    const { getBeers, isLoading } = useGetBeersMutation();

    useEffect(() => {
        getBeers(page).then((data) => setBeers(data))
    }, [])

    useEffect(() => {
        getBeers(page).then((data) => setBeers(data))
    }, [page])

    const handleNext = async () => {
        setPage(page + 1);
    };

    const handleBack = async () => {
        setPage(page - 1);
    };

    return (
        <Stack>
            <TopBar />
            <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 7, pb: 5 }}>
                <Stack alignItems='center'>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color={theme.palette.primary.dark}
                        gutterBottom
                    >
                        Beers
                    </Typography>
                </Stack>
            </Container>

            <Container maxWidth="xl" component="main">
                <Grid container spacing={3}>
                    {isLoading || beers.length === 0 ? (
                        <Grid item sm={12}>
                            <Stack alignItems='center' justifyContent='center' sx={{ marginTop: 10 }}>
                                <Lottie
                                    animationData={loadingAnimation}
                                    loop={true} height={400}
                                    width={400} />
                            </Stack>
                        </Grid>

                    ) : (
                        <>
                            {beers?.map((beer: Beer) => {
                                return (
                                    <Grid item sm={3} key={beer.id}>
                                        <BeerCard beer={beer} />
                                    </Grid>)
                            })}
                        </>
                    )
                    }

                </Grid>
                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ marginTop: 3 }}>
                    <Button disabled={page === 1} onClick={() => handleBack()} startIcon={<ArrowBackIcon fontSize="small" />} sx={{ color: theme.palette.primary.dark }}>
                        Voltar
                    </Button>
                    <Button onClick={() => handleNext()} endIcon={<ArrowForwardIcon fontSize="small" />} sx={{ color: theme.palette.primary.dark }}>
                        Avançar
                    </Button>
                </Stack>


            </Container>


        </Stack>
    );
}