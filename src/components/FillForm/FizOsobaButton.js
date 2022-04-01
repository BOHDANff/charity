import React from 'react';
import Button from "@mui/material/Button";

const FizOsobaButton = (props) => {
    return (
        <Button variant={props.buttonVariant == props.number ? 'contained' : 'outlined'}
                color='secondary'
                style={{textTransform: 'none'}}
                onClick={()=>props.setButtonVariant(props.number)}>{props.children}</Button>
    );
};

export default FizOsobaButton;