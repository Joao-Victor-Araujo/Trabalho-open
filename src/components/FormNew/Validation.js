import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string()
    .required("O Campo Email é obrigatório!").email("Digite um Email Válido"),
    password: yup.string().required("O Campo senha é obrigatório!").min(6, "Mínimo de 6 caracteres")
});


export default schema;