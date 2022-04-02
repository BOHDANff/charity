import React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput";

const PersonalDataForm = (props) => {
    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required("This is a required field")
            .matches(/^[\p{L}]+$/u, "First name must contain only characters")
            .max(29, `Must be less than 30 characters`),
        lastName: yup
            .string()
            .required("This is a required field")
            .matches(/^[\p{L}]+$/u, "Last name must contain only characters")
            .max(29, `Must be less than 30 characters`),
        organization: yup
            .string()
            .required("This is a required field")
            .max(100, `Must be less than 100 characters`),
        email: yup
            .string()
            .required("This is a required field")
            .email('Write your email correctly'),
        phone: yup
            .string()
            .matches(/^([+]?[0-9]{10,14})?$/, "Write your phone number correctly"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit = (persInfo) => {
        console.log(persInfo);
        reset()
    }
    return (
        <>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:"flex", justifyContent:"space-between", width: "100%"}}>
                    <MyInput
                        {...register('firstName')}
                        id={'firstName'}
                        type={'name'}
                        label={"Ім'я"}
                        error={!!errors.firstName}
                        helperText={errors?.firstName?.message}
                        style={{width:"48%"}}
                    />
                    <MyInput
                        {...register('lastName')}
                        id={'lastName'}
                        type={'text'}
                        label={'Прізвище'}
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                        style={{width:"48%"}}
                    />
                </div>
                <MyInput
                    {...register('organization')}
                    id="organization"
                    type="text"
                    label="Назва компанії, організації"
                    error={!!errors.organization}
                    helperText={errors?.organization?.message}
                />
                <MyInput
                    {...register('email')}
                    id={'email'}
                    type={'email'}
                    label={'Email-адреса'}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <MyInput
                    {...register('phone')}
                    id={'phone'}
                    type={'phone'}
                    label={'Номер телефону'}
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                />
            </MyForm>
        </>
    );
};

export default PersonalDataForm;