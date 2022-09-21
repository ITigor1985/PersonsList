import Form from "../Form/Form";
import { BtnCloseModal, ImgClose, ModalWindow, Overlay } from "./Modal.styled";

const Modal = ({ onClick, modalCloseBtn, addNewPeople }) => {
  return (
    <Overlay onClick={(event) => onClick(event)}>
      <ModalWindow>
        <Form addNewPeople={addNewPeople} />
        <BtnCloseModal type="button" onClick={modalCloseBtn}>
          <ImgClose />
        </BtnCloseModal>
      </ModalWindow>
    </Overlay>
  );
};
export default Modal;
