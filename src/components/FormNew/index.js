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
    });

    const onSubmit = data => {
    console.log(data)
    alert("Login feito com Sucesso!");
    document.location.reload(true);
}
        
    const esqueceuSenha = ()=>{
        alert("Entre em contato com o Email do Site");
    }
   
    return (
        <Div>
            <img src={img2} alt="" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field.Text placeholder="Email" label="Iniciar Sessão" name="email" type="email" register={register} {...register("email")} defaultValue='' />
                <span>{errors.email?.message}</span>
                <Field.Text placeholder="Senha" label="" name="password" type="password" register={register} {...register("password")} defaultValue='' />
                <span>{errors.password?.message}</span>
                
                <Button type="submit" className='button1'>Login</Button>
                
                <div className="lowlogin">
                <a id="link" href="" onClick={esqueceuSenha} className="link">Esqueceu a senha?</a> 
                <hr/>
                <a id="link1" href="" className="link">Cadastre-se</a>
                </div>
            </Form>
        </Div>

    );
}

export default FormNew;


