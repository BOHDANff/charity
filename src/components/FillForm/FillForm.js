import React from 'react';
import MyTitle from "../UI/MyTitle";
import FizOsoba from "./FizOsoba";
import {Grid} from "@mui/material";
import PersonalDataForm from "./PersonalDataForm";
import RegionalDataForm from "./RegionalDataForm";

const FillForm = () => {
    return (
        <div className='wrapper'>
            <MyTitle title={'Заповніть форму'}/>
            <FizOsoba style={{marginBottom: 20}}/>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={10} sm={8} md={4.5}>
                    <PersonalDataForm/>
                </Grid>
                <Grid item xs={10} sm={8} md={4.5}>
                    <RegionalDataForm/>
                </Grid>
            </Grid>
        </div>
    );
};

export default FillForm;