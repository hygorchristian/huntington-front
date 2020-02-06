import React, { useState } from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import set from '@babel/runtime/helpers/esm/set';
import { Container } from './styles';
import RadioImage from '~/components/RadioImage';

function SkinSelector() {
  const [tone, setTone] = useState(null);
  const [toneValue, setToneValue] = useState(null);

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
            checked={toneValue === 'branca-a'}
            onCheck={() => setToneValue('branca-a')}
          />
          <RadioImage
            image="/img/form/pele-branca-b-h.png"
            label="Branca B"
            checked={toneValue === 'branca-b'}
            onCheck={() => setToneValue('branca-b')}
          />
          <RadioImage
            image="/img/form/pele-branca-c-h.png"
            label="Branca C"
            checked={toneValue === 'branca-c'}
            onCheck={() => setToneValue('branca-c')}
          />
        </>
        )}
        {tone === 'amarela' && (
        <>
          <RadioImage
            image="/img/form/pele-amarela-a-h.png"
            label="Amarela A"
            checked={toneValue === 'amarela-a'}
            onCheck={() => setToneValue('amarela-a')}
          />
          <RadioImage
            image="/img/form/pele-amarela-b-h.png"
            label="Amarela B"
            checked={toneValue === 'amarela-b'}
            onCheck={() => setToneValue('amarela-b')}
          />
        </>
        )}
        {tone === 'parda' && (
        <>
          <RadioImage
            image="/img/form/pele-parda-a-h.png"
            label="Parda A"
            checked={toneValue === 'parda-a'}
            onCheck={() => setToneValue('parda-a')}
          />
          <RadioImage
            image="/img/form/pele-parda-b-h.png"
            label="Parda B"
            checked={toneValue === 'parda-b'}
            onCheck={() => setToneValue('parda-b')}
          />
          <RadioImage
            image="/img/form/pele-parda-c-h.png"
            label="Parda C"
            checked={toneValue === 'parda-c'}
            onCheck={() => setToneValue('parda-c')}
          />
        </>
        )}
        {tone === 'negra' && (
          <>
            <RadioImage
              image="/img/form/pele-negra-a-h.png"
              label="Negro A"
              checked={toneValue === 'negra-a'}
              onCheck={() => setToneValue('negra-a')}
            />
            <RadioImage
              image="/img/form/pele-negra-b-h.png"
              label="Negro B"
              checked={toneValue === 'negra-b'}
              onCheck={() => setToneValue('negra-b')}
            />
          </>
        )}
      </div>
    </Container>
);
}

export default SkinSelector;
