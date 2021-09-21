import React , {useMemo} from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardActions, Button, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from '../../store/orderInfoActions';
import Modal from '../Modal/Modal';
import InputFields from '../InputFields/InputFields';

const OrderInfo = ({ dishes, orderCart, remove, history }) => {
    const dispatch = useDispatch();
    const showPurchaseModal = useSelector(state => state.orderInfo.showPurchaseModal);

    let totalSum = 0;
    
    const items = Object.keys(orderCart).map(id => {
        const dish = dishes.find(d => d.id === id);
        const count = orderCart[id];
        const dishSum = count * dish.price;
        totalSum += dishSum + 150;
        
        return (
            <>
                <CardContent>
                    <Grid container justifyContent='space-between' alignItems="center">
                        <Typography color="textSecondary" px={4}>
                            {dish.dish} {dish.price} KGS  x{orderCart[id]} Sum: {dishSum}
                        </Typography>
                        <IconButton aria-label="delete" onclick={remove}>
                            <DeleteIcon />
                        </IconButton>
                    </ Grid>
                </CardContent>
            </>
        )
    });
    
    const purchasable = useMemo(() => {
        const totalCount = Object.keys(orderCart)
          .reduce((sum, id) => sum + orderCart[id], 0);
    
        return totalCount > 0;
      }, [orderCart]);

    const purchaseHandler = () => {
        dispatch(setModalOpen(true));
    };
    const purchaseCancelHandler = () => {
        dispatch(setModalOpen(false));
    };

    const purchaseContinueHandler = () => {
        history.push('/');
    };

    return (
        <Container maxWidth='md' sx={{ marginTop: '3rem' }}>
            <CssBaseline />
            <Modal
                show={showPurchaseModal}
                close={purchaseCancelHandler}
            >
                <InputFields
                    orders={dishes}
                    totalPrice={totalSum}
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
                            {items}
                            <CardContent sx={{ borderTop: '1px solid gray' }}>
                                <Typography color="textSecondary" gutterBottom>
                                    Delivery: 150 KGS
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Total: {totalSum} KGS
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    onClick={purchaseHandler}
                                    disabled={!purchasable}
                                >
                                    Place Order
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrderInfo;
