import styled from 'styled-components';

export const NewGrudgeStyled = styled.form`
  display: flex;
`;
NewGrudgeStyled.displayName = 'NewGrudgeStyled';

export const InputStyled = styled.input`
  width: 100%;
`;
InputStyled.displayName = 'InputStyled';

export const SubmitStyled = styled.input``;
SubmitStyled.displayName = 'SubmitStyled';

export const PreviousStyled = styled.span`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: black;
  border-radius: 50%;
  margin-right: 5px;

  :hover {
    background-color: #ddd;
    color: black;
  }
`;
PreviousStyled.displayName = 'PreviousStyled';

export const NextStyled = styled.span`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  margin-left: 5px;

  :hover {
    background-color: #ddd;
    color: black;
  }
`;
NextStyled.displayName = 'NextStyled';
