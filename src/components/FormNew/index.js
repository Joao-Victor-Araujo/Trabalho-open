import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../Button";
import Field from '../Field';
import Form from '../Form';
import img2 from "./anime.png";
import Div from "./style";

const FormNew = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()//{
    //     resolver: yupResolver(schema)
    // })

    const onSubmit = data => console.log(data);

    const esqueceuSenha = ()=>{
        alert("Entre em contato com o Email do Site")
    }
   
    return (
        <Div>
            <img src={img2} alt="" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field.Text placeholder="Email" label="Iniciar Sessão" name="email" type="email"  register={register} />
                <span>{errors.email?.message}</span>
                <Field.Text placeholder="Senha" label="" name="password" type="password" register={register} />
                <span>{errors.password?.message}</span>
                <Button type="submit" className='button button1'>Login</Button>
                
                <div style={{paddingTop: '45px', textAlign: 'center'}}>
                <a href="x" onClick={esqueceuSenha} className="link">Esqueceu a senha?</a> 
                <hr/>
                <a  href="xx" className="link">Cadastre-se</a>
                </div>
            </Form>
        </Div>

    );
}

export default FormNew;


