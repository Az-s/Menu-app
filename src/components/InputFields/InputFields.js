import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { Button } from '@material-ui/core';
import './InputFields';

const InputFields = (props) => {

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
            <p>Continue to checkout?</p>
            <Button type="Danger" variant="contained" color="secondary" onClick={props.onCancel} sx={{ marginRight: '5px' }}>CANCEL</Button>
            <Button type="Success" variant="contained" color="primary" onClick={props.onContinue}>CONTINUE</Button>
        </>
    )
}

export default InputFields;
