import styled from 'styled-components';

export const Container = styled.div`
  height: 65px;
  border: 2px dashed #f0f0f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Fieldset = styled.fieldset`
  border: 2px dashed #f0f0f0;
  border-radius: 5px;
  
  legend{
    color: #646464;
    text-transform: uppercase;
  }
  
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;    
  }
`;
