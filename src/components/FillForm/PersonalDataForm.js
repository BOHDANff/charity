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
            .matches(/^[\p{L}]+$/u, "First name must contain only characters"),
        lastName: yup
            .string()
            .required("This is a required field")
            .matches(/^[\p{L}]+$/u, "Last name must contain only characters"),
        organization: yup
            .string()
            .required("This is a required field"),
        priority: yup
            .number()
            .required("This is a required field"),
        dueDate: yup
            .string()
            .required("This is a required field"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit = (formInfo) => {
        console.log(formInfo);
        reset()
    }
    return (
        <>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
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
                    {...register('priority')}
                    id={'priority'}
                    type={'number'}
                    label={'Priority'}
                    error={!!errors.priority}
                    helperText={errors?.title?.priority}
                />
                <MyInput
                    {...register('dueDate')}
                    id={'dueDate'}
                    type={'date'}
                    label={'Due date'}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.dueDate}
                    helperText={errors?.dueDate?.message}
                />
            </MyForm>
        </>
    );
};

export default PersonalDataForm;