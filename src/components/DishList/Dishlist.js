import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import { useTheme } from '@material-ui/core';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia, CardActions, Button, Box } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Dishlist = () => {
    const theme = useTheme();

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
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            image='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                            sx={{ width: 150 }}
                            title="Food"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    Pizza
                                </Typography>
                            </CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                220 KGS
                            </Typography>
                            <CardActions>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
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
