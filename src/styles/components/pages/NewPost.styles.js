import styled from 'styled-components';

export const FormWrapper = styled.form`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 2rem;
  margin: 60px auto 0;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;