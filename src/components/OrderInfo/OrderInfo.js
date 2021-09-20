import React from 'react';
import { useTheme } from '@material-ui/core';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia, CardActions, Button, Box } from '@material-ui/core';

const OrderInfo = () => {
    const theme = useTheme();
    return (
        <Container maxWidth='md' sx={{ marginTop: '2rem' }}>
            <CssBaseline />
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Card sx={{ display: 'flex' , minWidth: '400px'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' , alignItems: 'center' ,minWidth: '400px'}}>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    Your order:
                                </Typography>
                            </CardContent>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    220 KGS
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ borderTop: '1px solid gray' }}>
                                <Typography color="textSecondary" gutterBottom>
                                    Delivery: 150 KGS
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Total:
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Contained</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrderInfo;
