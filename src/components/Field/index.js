import React from 'react'
import Label from './Label';
import Input from './Input';
import Content from './Content';

const Text = ({label, type, name, register, placeholder})=>(
<Label>
    <Content>{label}</Content>
    <Input placeholder={placeholder} type={type} name={name} register={register}></Input>
</Label>
);

const Field={
    Text,
};

export default Field;
