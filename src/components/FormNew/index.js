import React from "react";
import Field from '../Field';
import Form from '../Form';
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./Validation";
import img2 from "./anime.png";
import Div from "./style";

const FormNew = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (user) => {
        console.log(user)
        alert("Login Feito com Sucesso!")

    }
   
    return (
        <Div>
            <img src={img2} alt="" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field.Text placeholder="Email" label="Iniciar Sessão" name="email" type="email" {...register('email')} />
                <span>{errors.email?.message}</span>
                <Field.Text placeholder="Senha" label="" name="password" type="password" {...register('password')} />
                <span>{errors.password?.message}</span>
                <Button type="submit">Login</Button>
                
                <a href="https://www.google.com.br/" className="link">Esqueceu a senha?</a> 
                <br/><br/>
                <a  href="https://www.google.com.br/" className="link">Cadastre-se</a>
            </Form>
        </Div>

    );
}

export default FormNew;

