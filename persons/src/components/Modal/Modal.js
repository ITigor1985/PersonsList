import Form from "../Form/Form";
import { BtnCloseModal, ImgClose, ModalWindow, Overlay } from "./Modal.styled";

const Modal = ({ onClick, modalCloseBtn, addNewPeople, name, surname, id }) => {
  return (
    <Overlay onClick={(event) => onClick(event)}>
      <ModalWindow>
        <Form
          addNewPeople={addNewPeople}
          editName={name}
          editSurname={surname}
          id={id}
        />
        <BtnCloseModal type="button" onClick={modalCloseBtn}>
          <ImgClose />
        </BtnCloseModal>
      </ModalWindow>
    </Overlay>
  );
};
export default Modal;
