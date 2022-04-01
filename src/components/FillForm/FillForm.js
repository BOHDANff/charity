import React from 'react';
import Title from "../Title";
import FizOsoba from "./FizOsoba";
import {Grid} from "@mui/material";

const FillForm = () => {
    return (
        <div className='wrapper' >
            <Title title={'Заповніть форму'}/>
            <FizOsoba/>
            <Grid container spacing={2}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </div>
    );
};

export default FillForm;