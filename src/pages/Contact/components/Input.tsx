import { Container, InputField, Label } from './Input.styled';

const Input = () => {
  return (
    <>
      <InputField
        type="input"
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <Label className="formLabel">Name</Label>
    </>
  );
};
export default Input;
