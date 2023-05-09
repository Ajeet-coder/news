import * as yup from 'yup'

export const signUpSchema=yup.object({
    email: yup.string().email().required("Please enter Your email!"),
    password:yup.string().min(6).required("Please enter your password!"),
    confirm_password: yup.string().required().oneOf([yup.ref('password')],
    "Password must match!"
    )

})