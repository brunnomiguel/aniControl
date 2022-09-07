import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please, type your e-mail")
    .email("Invalid e-mail"),
  password: yup.string().required("Please, type your password"),
});
