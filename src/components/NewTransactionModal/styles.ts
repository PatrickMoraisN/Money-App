import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.4rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.4s;
    font-weight: 600;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionsTypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1.4rem 0;
`;

interface RadioBoxProps {
  isActive: boolean,
}

export const RadioBox = styled.button<RadioBoxProps>`
  flex: 1;
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive ? '#d7d7d7' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
    background: #f7f7f7;
  }

`;