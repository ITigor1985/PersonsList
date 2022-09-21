import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #4bcfa0;
  cursor: pointer;

  :hover {
    border: none;
    background-color: #4bcfa0;
    color: white;
  }
`;
