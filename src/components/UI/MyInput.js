import React, { forwardRef } from "react";
import {TextField} from "@mui/material";

export const MyInput = forwardRef((props, ref) => {
    return (
        <TextField
            variant="filled"
            margin="normal"
            inputRef={ref}
            fullWidth
            autoComplete='on'
            {...props}
        />
    );
});