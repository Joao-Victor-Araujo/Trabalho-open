import React from "react";
import Field from '../Field';
import Form from '../Form';
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./Validation";
import img2 from "./anime2.jpg";
import Div from "./style";

const FormNew = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
    console.log(data)
    alert("Cadastro feito com Sucesso!");
}
        
    // const esqueceuSenha = ()=>{
    //     alert("Entre em contato com o Email do Site");
    // }
   
    return (
        <Div>
            <img src={img2} alt="" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field.Text placeholder="Usuário" label="Cadastro" name="name" autocomplete="on" type="name" register={register} {...register("name")} defaultValue='' />
                <span>{errors.name?.message}</span>
                <Field.Text placeholder="Email" label="" name="email" type="email" autocomplete="on" register={register} {...register("email")} defaultValue='' />
                <span>{errors.email?.message}</span>
                <Field.Text placeholder="Senha" label="" name="password" type="password" autocomplete="on" register={register} {...register("password")} defaultValue='' />
                <span>{errors.password?.message}</span>
                <Field.Text placeholder="Confirmar Senha" label="" name="confirmPassword" autocomplete="on" type="password" register={register} {...register("confirmPassword")} defaultValue='' />
                <span>{errors.confirmPassword?.message}</span>
                
                <Button type="submit" className='button1'>Cadastrar</Button>
                
                {/* <div style={{paddingTop: '45px', textAlign: 'center'}}>
                <a href="x" onClick={esqueceuSenha} className="link">Esqueceu a senha?</a> 
                <hr/>
                <a  href="xx" className="link">Cadastre-se</a>
                </div> */}
            </Form>
        </Div>

    );
}

export default FormNew;


