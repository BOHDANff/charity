import React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput";
import MyCountryInput from "../UI/MyCountryInput/MyCountryInput";

const RegionalDataForm = (props) => {
    const schema = yup.object().shape({
        country: yup
            .string()
            .required("This is a required field"),
        city: yup
            .string()
            .required("This is a required field")
            .matches(/^[\p{L}]+$/u, "City name must contain only characters")
            .max(29, `Must be less than 30 characters`),
        district: yup
            .string()
            .matches(/^[\p{L}]+$/u, "District name must contain only characters")
            .max(29, `Must be less than 30 characters`),
        address: yup
            .string(),
        mailIndex: yup
            .string()
            .matches(/^([0-9]*)$/, "Write your phone number correctly")
            .min(5, 'Mail index must contain 5 numbers'),

    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit = (regInfo) => {
        console.log(regInfo);
        reset()
    }
    return (
        <>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyCountryInput
                    {...register('country')}
                    id={'country'}
                    type={'text'}
                    label={"Країна"}
                    error={!!errors.country}
                    helperText={errors?.country?.message}
                />
                <div style={{display:"flex", justifyContent:"space-between", width: "100%"}}>
                    <MyInput
                        {...register('city')}
                        id={'city'}
                        type={'text'}
                        label={"Місто"}
                        error={!!errors.city}
                        helperText={errors?.city?.message}
                        style={{width:"48%"}}
                    />
                    <MyInput
                        {...register('district')}
                        id={'district'}
                        type={'text'}
                        label={'Штат, район'}
                        error={!!errors.district}
                        helperText={errors?.district?.message}
                        style={{width:"48%"}}
                    />
                </div>
                <MyInput
                    {...register('address')}
                    id={'address'}
                    type={'text'}
                    label={'Адреса'}
                    error={!!errors.address}
                    helperText={errors?.address?.message}
                />
                <div style={{display:"flex",  width: "100%"}}>
                    <MyInput
                        {...register('mailIndex')}
                        id={'mailIndex'}
                        type={'text'}
                        label={'Поштовий індекс'}
                        error={!!errors.mailIndex}
                        helperText={errors?.mailIndex?.message}
                        inputProps={{
                            maxLength: 5
                        }}
                        style={{width: "50%"}}
                    />
                </div>
            </MyForm>
        </>
    );
};

export default RegionalDataForm;