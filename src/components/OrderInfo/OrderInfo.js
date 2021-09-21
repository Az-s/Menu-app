import React, { useEffect, useMemo } from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardActions, Button, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen, INIT_DISH_ORDER, SET_MODAL_OPEN, REMOVE_DISH } from '../../store/orderInfoActions';
import Modal from '../Modal/Modal';
import InputFields from '../InputFields/InputFields';

const OrderInfo = ({ history }) => {
    const dispatch = useDispatch();
    // const dishes = useSelector(state => state.orderInfo.menuList);
    // const totalPrice = useSelector(state => state.orderInfo.totalPrice);
    const showPurchaseModal = useSelector(state => state.orderInfo.showPurchaseModal);

    // useEffect(() => {
    //     dispatch(INIT_DISH_ORDER());
    //   }, [dispatch]);

    const purchaseHandler = () => {
        dispatch(setModalOpen(true));
    };
    const purchaseCancelHandler = () => {
        dispatch(setModalOpen(false));
    };

    const purchaseContinueHandler = () => {
        history.push('/checkout');
      };

    return (
        <Container maxWidth='md' sx={{ marginTop: '3rem' }}>
            <CssBaseline />
            <Modal
                show={showPurchaseModal}
                close={purchaseCancelHandler}
            >
                <InputFields
                    // ingredients={ingredients}
                    // totalPrice={totalPrice}
                    onCancel={purchaseCancelHandler}
                    onContinue={purchaseContinueHandler}
                />
            </Modal>
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
                                <Button variant="contained" onClick={purchaseHandler}>Place Order</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrderInfo;
