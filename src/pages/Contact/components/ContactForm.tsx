import { useForm } from 'react-hook-form';
import { formSchema } from '../schemas/form.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button/Button';
import { Form } from './ContactForm.styled';
import emailjs from '@emailjs/browser';
import { Container, InputField, Label, TextareaField } from './Input.styled';
import { useContext, useRef } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
interface FormInputType {
  name: string;
  email: string;
  body: string;
}

const defaultValues = {
  name: '',
  email: '',
  body: '',
};

const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });
  const { translation } = useContext(LanguageContext);
  const formTranslation = translation?.Contact?.ContactForm;
  const submitEmail = (data: object) => {
    emailjs.send(
      'service_cn262pt',
      'template_2a4vxqj',
      form.current,
      '_UCWFokTWC-jpaGfK'
    );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(submitEmail)}>
        <Container>
          <InputField
            {...register('name')}
            type="text"
            name="user_name"
            id="name"
            autoComplete="off"
            required
          />
          <Label className="formLabel">{formTranslation?.NameLabel}</Label>
          <div>
            <span>{errors.name?.message}</span>
          </div>
        </Container>
        <Container>
          <InputField
            {...register('email')}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
          <Label className="formLabel">Email</Label>
          <div>
            <span>{errors.email?.message}</span>
          </div>
        </Container>
        <Container>
          <TextareaField
            {...register('body')}
            name="body"
            id="email"
            autoComplete="off"
            required
          />
          <Label className="formLabel">{formTranslation?.MessageLabel}</Label>
          <div>
            <span>{errors.body?.message}</span>
          </div>
        </Container>
        <Button type="button" value={formTranslation?.ButtonSend} />
      </Form>
    </div>
  );
};
export default ContactForm;
