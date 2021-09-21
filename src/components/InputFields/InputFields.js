import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axiosApi from '../../axiosApi';
import './InputFields';

const InputFields = (props , {history}) => {

    const [customer, setCustomer] = useState({
        name: '',
        number: '',
        adress: ''
    });

    const onInputChange = e => {
        const { name, value } = e.target;

        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const createOrder = async e => {
        e.preventDefault();

        try {
            await axiosApi.post('orders.json', {
                customer,
                // order,
            });
        } finally {
            // history.replace('/');
        }
    };

    return (
        <>
            <h3>Your order:</h3>
            <ul>
                {/* {Object.keys(props.ingredients).map(type => (
                    <li key={type}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {type}
                        </span>: {props.ingredients[type]}
                    </li>
                ))} */}
            </ul>
            <p><strong>Total Price: {props.totalPrice} KGS</strong></p>
            <p>Fill the fields:</p>
            <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: '100%', }} onSubmit={createOrder}>
                <TextField id="filled-basic" label="Name"
                    type='text'
                    name="name"
                    variant="filled"
                    value={customer.name}
                    onChange={onInputChange}
                />
                <TextField id="filled-basic" label="Number"
                    type='number'
                    name="number"
                    variant="filled"
                    value={customer.number}
                    onChange={onInputChange}
                />
                <TextField id="filled-basic" label="Adress"
                    type='text'
                    name="adress"
                    variant="filled"
                    value={customer.adress}
                    onChange={onInputChange}
                    style={{ marginBottom: '5px' }}
                />
            </form>
            <Button type="button" variant="contained" color="secondary" onClick={props.onCancel} sx={{ marginRight: '5px' }}>CANCEL</Button>
            <Button type="submit" variant="contained" color="primary" onClick={createOrder}>CONTINUE</Button>
        </>
    )
};

export default InputFields;
