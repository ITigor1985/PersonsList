import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPeople } from "../../api/api";
import { useInpute } from "./customHooks/customHooks";
import {
  BtnSubmit,
  FormContact,
  InputContainer,
  InputError,
  InputName,
  InputSurname,
} from "./Form.styled";

let item = {};

const positionToast = () => {
  return { position: toast.POSITION.TOP_CENTER };
};

const Form = ({ addNewPeople }) => {
  const name = useInpute("", { isEmpty: true, onlyLetter: true });
  const surname = useInpute("", { isEmpty: true, onlyLetter: true });

  const handleSubmit = (nameValidError, surnameValidError, evt) => {
    evt.preventDefault();
    if (!nameValidError || !surnameValidError) {
      toast.warn(
        "Not all fields are filled or filled out incorrectly",
        positionToast()
      );
      return;
    }

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    item = { name, surname };
    addPeople(item);
    addNewPeople();
    toast.success("People add!", positionToast());
  };

  return (
    <FormContact
      onSubmit={(e) => handleSubmit(name.inputValid, surname.inputValid, e)}
    >
      {name.isDirty && name.onlyLetter && (
        <InputError>Only letters allowed</InputError>
      )}
      {name.isDirty && name.isEmpty && (
        <InputError>This field in required</InputError>
      )}

      <InputContainer
        borderColor={name.isDirty && (name.inputValid ? "green" : "red")}
      >
        <InputName
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          value={name.value}
          name="name"
          type="text"
          placeholder="Name"
          borderColor={name.isDirty && (name.inputValid ? "green" : "red")}
        />
      </InputContainer>

      {surname.isDirty && name.onlyLetter && (
        <InputError>Only letters allowed</InputError>
      )}
      {surname.isDirty && name.isEmpty && (
        <InputError>This field in required</InputError>
      )}

      <InputContainer
        borderColor={surname.isDirty && (surname.inputValid ? "green" : "red")}
      >
        <InputSurname
          onChange={(e) => surname.onChange(e)}
          onBlur={(e) => surname.onBlur(e)}
          value={surname.value}
          name="surname"
          type="text"
          placeholder="Surname"
          borderColor={
            surname.isDirty && (surname.inputValid ? "green" : "red")
          }
        />
      </InputContainer>
      <BtnSubmit type="submit">Submit</BtnSubmit>
      <ToastContainer />
    </FormContact>
  );
};
export default Form;
