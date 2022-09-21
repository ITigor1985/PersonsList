import { Btn } from "./BtnBuy.styled";

const BtnAdd = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Add
    </Btn>
  );
};

export default BtnAdd;
