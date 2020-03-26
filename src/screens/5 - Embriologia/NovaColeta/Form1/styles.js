import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .form{
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    align-items: center;
    width: 100%;
    grid-template-areas: 
      'nome nome'
      'data .'
      'input input'
      'metodo tanque'
    ;
    
    .form-pin{ grid-area: pin }
    .form-nome{ grid-area: nome }
    .form-data{ grid-area: data }
    .form-input{ grid-area: input }
    .form-metodo{ grid-area: metodo }
    .form-tanque{ grid-area: tanque }
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: #dfdfdf;
    margin: 20px 0;
  }
  
  .controller{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;
