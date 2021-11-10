import React from 'react'
import Label from './Label';
import Input from './Input';
import Content from './Content';

const Text = ({label, type, name, register, placeholder, required, defaultValue})=>(
<Label>
    <Content>{label}</Content>
    <Input placeholder={placeholder} type={type} name={name} ref={register} {...register({label}, { required })} defaultValue={defaultValue} ></Input>
</Label>
);

const Field={
    Text,
};

export default Field;
