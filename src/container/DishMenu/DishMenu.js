import React, { useEffect } from 'react';
import { Grid, Box, CssBaseline } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchDishMenu } from "../../store/actions";
import Dishlist from '../../components/DishList/Dishlist';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import { addDish , removeDish } from '../../store/orderInfoActions';

const DishMenu = () => {

    const dispatch = useDispatch();

    const dishes = useSelector(state => state.list.dishes);
    const orderCart = useSelector(state => state.orderInfo.items);

    useEffect(() => {
        dispatch(fetchDishMenu());
    }, [dispatch]);

    const onClickAdd = (id) => {
        dispatch(addDish(id));
    };

    const onClickRemove = (id) => {
        dispatch(removeDish(id));
    };


    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        {dishes.map(dish => (
                            <Dishlist
                                key={dish.id}
                                name={dish.dish}
                                price={dish.price}
                                img={dish.img}
                                add={() => onClickAdd(dish.id)}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        <OrderInfo 
                        orderCart={orderCart} 
                        dishes={dishes}
                        remove={onClickRemove}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default DishMenu;
