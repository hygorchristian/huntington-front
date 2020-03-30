import React, { useState } from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import set from '@babel/runtime/helpers/esm/set';
import { Container } from './styles';
import RadioImage from '~/components/RadioImage';

function SkinSelector({ value, onChange, skinTone }) {
  const [tone, setTone] = useState(skinTone);

  const handleChange = (e) => {
    setTone(e.target.value);
  };

  return (
    <Container>
      <div className="left">
        <RadioGroup aria-label="gender" name="gender1" value={tone} onChange={handleChange}>
          <FormControlLabel value="branca" control={<Radio color="primary" />} label="Branca" />
          <FormControlLabel value="amarela" control={<Radio color="primary" />} label="Amarela" />
          <FormControlLabel value="parda" control={<Radio color="primary" />} label="Parda" />
          <FormControlLabel value="negra" control={<Radio color="primary" />} label="Negra" />
        </RadioGroup>
      </div>
      <div className="right">
        {tone === 'branca' && (
        <>
          <RadioImage
            image="/img/form/pele-branca-a-h.png"
            label="Branca A"
            checked={value === 'branca-a'}
            onCheck={() => onChange('branca-a')}
          />
          <RadioImage
            image="/img/form/pele-branca-b-h.png"
            label="Branca B"
            checked={value === 'branca-b'}
            onCheck={() => onChange('branca-b')}
          />
          <RadioImage
            image="/img/form/pele-branca-c-h.png"
            label="Branca C"
            checked={value === 'branca-c'}
            onCheck={() => onChange('branca-c')}
          />
        </>
        )}
        {tone === 'amarela' && (
        <>
          <RadioImage
            image="/img/form/pele-amarela-a-h.png"
            label="Amarela A"
            checked={value === 'amarela-a'}
            onCheck={() => onChange('amarela-a')}
          />
          <RadioImage
            image="/img/form/pele-amarela-b-h.png"
            label="Amarela B"
            checked={value === 'amarela-b'}
            onCheck={() => onChange('amarela-b')}
          />
        </>
        )}
        {tone === 'parda' && (
        <>
          <RadioImage
            image="/img/form/pele-parda-a-h.png"
            label="Parda A"
            checked={value === 'parda-a'}
            onCheck={() => onChange('parda-a')}
          />
          <RadioImage
            image="/img/form/pele-parda-b-h.png"
            label="Parda B"
            checked={value === 'parda-b'}
            onCheck={() => onChange('parda-b')}
          />
          <RadioImage
            image="/img/form/pele-parda-c-h.png"
            label="Parda C"
            checked={value === 'parda-c'}
            onCheck={() => onChange('parda-c')}
          />
        </>
        )}
        {tone === 'negra' && (
          <>
            <RadioImage
              image="/img/form/pele-negra-a-h.png"
              label="Negro A"
              checked={value === 'negra-a'}
              onCheck={() => onChange('negra-a')}
            />
            <RadioImage
              image="/img/form/pele-negra-b-h.png"
              label="Negro B"
              checked={value === 'negra-b'}
              onCheck={() => onChange('negra-b')}
            />
          </>
        )}
      </div>
    </Container>
);
}

export default SkinSelector;
