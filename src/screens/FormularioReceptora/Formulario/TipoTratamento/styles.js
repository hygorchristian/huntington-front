import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';

export const Container = styled.div`
  padding: 20px 10px;
  
  p{
    color: rgba(0,0,0,0.63);
    padding: 0;
    font-size: 13px;
    margin-top: 30px;
  }
`;

export const Group = styled(RadioGroup).attrs({
  row: true
})`
`;
