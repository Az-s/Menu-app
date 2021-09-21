import React, { useEffect } from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia, CardActions, Button, Box } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { fetchDishMenu } from "../../store/actions";

const Dishlist = () => {

    const dispatch = useDispatch();
    const dishList = useSelector(state => state.list.dishList);

    useEffect(() => {
        dispatch(fetchDishMenu());
    }, [dispatch]);


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
                    {dishList.map((dish , id) => (
                        <Card sx={{ display: 'flex' , marginTop: '1rem'}} key={id}>
                            <CardMedia
                                component="img"
                                image={dish.img}
                                sx={{ width: 180 }}
                                title="Food"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' , minWidth: '300px' }}>
                                <CardContent >
                                    <Typography color="textSecondary" gutterBottom>
                                        {dish.dish}
                                    </Typography>
                                </CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {dish.price} KGS
                                </Typography>
                                <CardActions sx={{ display: 'flex' , justifyContent: 'center'}}>
                                    <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
                                        Add to cart
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dishlist;
