import * as yup from 'yup';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Type more than 3 characters')
    .max(30, 'must be 30 characters or less')
    .required('Please enter your name'),
  email: yup
    .string()
    .matches(emailRegex, 'please type a correct format')
    .required('Please enter your email'),
  body: yup
    .string()
    .min(7, 'Please type more than 7 characters')
    .max(200, 'Please dont type more than 200 characters')
    .required('Please enter the subject you want to contact me'),
});
