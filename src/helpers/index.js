import { createMuiTheme } from "@material-ui/core";
import * as yup from "yup";

export const LoginData = [
  { name: "user", type: "string", label: "Usuário" },
  { name: "password", type: "password", label: "Senha" },
];

export const FormData = [
  {
    name: "user",
    label: "Usuário",
    type: "string",
  },
  {
    name: "name",
    label: "Nome completo",
    type: "string",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
  },
  {
    name: "password",
    label: "Senha",
    type: "password",
  },
  {
    name: "password_confirmation",
    label: "Confirmar senha",
    type: "password",
  },
];

export const FeedbackData = [
  { name: "name", type: "string", label: "Nome" },
  { name: "comment", type: "string", label: "Comentário" },
];

export const AuthenticatedData = [
  {
    label: "Usuários",
    url: "/users",
  },
  {
    label: "Meus Feedbacks",
    url: "/feedbacks",
  },
  {
    label: "Contato",
    url: "/contact",
  },
  {
    label: "Sair",
    url: "/",
  },
];

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export const schema_Signup = yup.object().shape({
  user: yup
    .string("Formato de usuário inválido.")
    .min(6, "Seu usuário deve ter no mínimo 6 caractéres.")
    .required("Campo obrigatório."),
  name: yup
    .string("Formato de nome inválido.")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "Informar nome e sobrenome contendo apenas letras."
    )
    .required("Campo obrigatório."),
  email: yup
    .string("Formato de e-mail inválido.")
    .email("Formato de e-mail inválido.")
    .required("Campo obrigatório."),
  password: yup
    .string("Formato de senha inválida.")
    .min(6, "Sua senha deve ter no mínimo 6 caractéres.")
    .matches(
      /(?=.*[#$@!%&*?])/i,
      "Sua senha deve ter no mínimo um caractér especial."
    )
    .required("Campo obrigatório."),
  password_confirmation: yup
    .string("Formato de senha inválida.")
    .oneOf([yup.ref("password")], "Suas senhas não correspondem.")
    .required("Campo obrigatório."),
});

export const schema_Login = yup.object().shape({
  user: yup
    .string("Formato de usuário inválido.")
    .min(6, "Seu usuário deve ter no mínimo 6 caractéres.")
    .required("Campo obrigatório."),
  password: yup
    .string("Formato de senha inválida.")
    .min(6, "Sua senha deve ter no mínimo 6 caractéres.")
    .matches(
      /(?=.*[#$@!%&*?])/i,
      "Sua senha deve ter no mínimo um caractér especial."
    ),
});

export const user_id = () => window.localStorage.getItem("user_id");

export const token = () => window.localStorage.getItem("auth_token");
