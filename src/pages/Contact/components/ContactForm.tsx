import { useForm } from 'react-hook-form';
import { formSchema } from '../schemas/form.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button/Button';
import { Form } from './ContactForm.styled';
import Input from './Input';
import { Container, InputField, Label, TextareaField } from './Input.styled';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });
  const submitEmail = (data: object) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(submitEmail)}>
        <Container>
          <InputField
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            autoComplete="off"
            required
          />
          <Label className="formLabel">Name</Label>
          <div>
            <span>{errors.name?.message}</span>
          </div>
        </Container>
        <Container>
          <InputField
            type="email"
            placeholder="hi"
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
            placeholder="hi"
            name="body"
            id="email"
            autoComplete="off"
            required
          />
          <Label className="formLabel">Message</Label>
          <div>
            <span>{errors.body?.message}</span>
          </div>
        </Container>
        <Button value="Send email" />
      </Form>
    </div>
  );
};
export default ContactForm;
