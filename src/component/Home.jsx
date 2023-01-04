import { Grid } from '@mui/material';
import React from 'react'
import Tea from '../assets/tea.gif'

const Home = () => {
    return (
        <Grid justifyContent='center' >
            <img style={{ maxHeight: '620px', margin: '10px' }} src={Tea} alt="tea" />
            <Grid sx={{ textAlign: 'center' }} >
                <h1 style={{ fontFamily: 'cursive' }}>🍔 Search your favorite food 🍕</h1>
                <h1 style={{ color: '#ffa500' }}>Find your go-to grub 🍕</h1>
            </Grid>
        </Grid>
    )
}

export default Home;