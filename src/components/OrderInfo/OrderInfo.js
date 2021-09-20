import React from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardActions, Button, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const OrderInfo = () => {
    return (
        <Container maxWidth='md' sx={{ marginTop: '3rem' }}>
            <CssBaseline />
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Card sx={{ display: 'flex', minWidth: '400px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', minWidth: '400px' }}>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    Your order:
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Grid container justifyContent='space-between' alignItems="center">
                                    <Typography color="textSecondary" px={4}>
                                        220 KGS
                                    </Typography>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ Grid>
                            </CardContent>
                            <CardContent sx={{ borderTop: '1px solid gray' }}>
                                <Typography color="textSecondary" gutterBottom>
                                    Delivery: 150 KGS
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Total: 370 KGS
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Place Order</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrderInfo;
