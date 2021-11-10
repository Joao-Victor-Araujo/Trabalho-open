import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").min(3, "Nome deve ter mais de 3 letras"),
    email: yup.string()
    .required("O Campo Email é obrigatório!").email("Digite um Email Válido"),
    password: yup.string().required("O Campo senha é obrigatório!").min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "As senhas devem corresponder")
});


export default schema;