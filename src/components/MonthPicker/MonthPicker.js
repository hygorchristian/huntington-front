import React, { useState } from 'react';
import { format } from 'date-fns';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import set from '@babel/runtime/helpers/esm/set';
import { Container } from './styles';
import { formatarMesAno } from '~/utils/data';

function MonthPicker() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const prev = () => {
    const newMonth = month - 1;

    if (newMonth < 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(newMonth);
    }
  };

  const next = () => {
    const newMonth = month + 1;
    const today = new Date();

    if (newMonth > today.getMonth() && today.getFullYear() === year) return;

    if (newMonth > 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(newMonth);
    }
  };

  const data = formatarMesAno(month, year);
  console.tron.log(month);

  return (
    <Container>
      <button onClick={prev}>
        <FiChevronLeft />
      </button>
      <span>{data}</span>
      <button className={month === new Date().getMonth() ? 'inativo' : ''} onClick={next}>
        <FiChevronRight />
      </button>
    </Container>
);
}

export default MonthPicker;
