import * as yup from "yup";

const schema = yup.object({
    email: yup.string()
    .email("Digite um Email Válido")
    .required("Preencha o Campo Email"),
    password: yup.string()
    .min(6, "Mínimo de 2 caracteres")
    .required("Preencha o Campo Senha"),
}).required();


export default schema;