import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

import { Container } from './styles';

function Search({ value, onChange, onFilter }) {
  return (
    <Container>
      <FiSearch size={20} />
      <input type="search" value={value} onChange={onChange} />
      <span onClick={onFilter}>
        <FiFilter size={20} color="#8B8D8E" />
      </span>
    </Container>
);
}

export default Search;
