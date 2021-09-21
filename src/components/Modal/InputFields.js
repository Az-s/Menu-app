import React from 'react';

import './InputFields';

const InputFields = (props) => {

    return (
        <>
            <Backdrop
                show={props.show}
                onClick={props.close}
            />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            >
                {props.children}
            </div>
        </>
    )
}

export default InputFields;
