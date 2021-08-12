import styled from 'styled-components';


export const Container = styled.header`
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
