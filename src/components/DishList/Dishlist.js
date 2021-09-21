import React from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia, CardActions, Button, Box } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Dishlist = ({ img, name, price , add }) => {

    return (
        <Container maxWidth='md' sx={{ marginTop: '2rem' }}>
            <CssBaseline />
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Card sx={{ display: 'flex', marginTop: '1rem' }}>
                        <CardMedia
                            component="img"
                            image={img}
                            sx={{ width: 160 }}
                            title={name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minWidth: '300px' }}>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    {name}
                                </Typography>
                            </CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {price} KGS
                            </Typography>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<AddShoppingCartIcon />}
                                    onClick={add}
                                >
                                    Add to cart
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dishlist;
