import styled from 'styled-components';
import errorImage from '../../images/error.svg';
import arrow from '../../images/arrow-right.svg';

export const FormContact = styled.form`
  display: flex;
  width: 100%;
  margin-top: 32px;
  flex-direction: column;
`;

const setBorderColor = props => {
  switch (props.borderColor) {
    case 'green':
      return '1px solid green';
    case 'red':
      return '1px solid red';
    default:
      return '1px solid rgba(0, 0, 0, 0.2)';
  }
};

const displayVisible = props => {
  switch (props.borderColor) {
    case 'green':
      return 'none';
    case 'red':
      return 'block';
    default:
      return 'none';
  }
};

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  &::after {
    content: '';
    display: ${displayVisible};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: 11px;
    background-image: url(${errorImage});
    background-size: contain;
    height: 24px;
    width: 24px;
  }
`;

export const InputName = styled.input`
  position: relative;
  border: ${setBorderColor};
  outline: none;
  height: 56px;
  border-radius: 16px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const InputSurname = styled.input`
  border: ${setBorderColor};
  outline: none;
  height: 56px;
  border-radius: 16px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  width: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const BtnSubmit = styled.button`
  position: relative;
  padding: 16px 103px;
  background: #4bcfa0;
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-top: 16px;
  :hover {
    background: #50daa8;
  }
  :hover::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 185px;
    transform: translateY(-50%);
    background-image: url(${arrow});
    background-size: contain;
    height: 20px;
    width: 20px;
  }
`;
export const InputError = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #e43f3f;
`;
