import React from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

function ImagePicker({ value, onSelect, onDelete }) {
  const onChange = (e) => {
    const file = e.target.files[0];
    onSelect(file);
  };

  return (
    <Container>
      {
        value ? (
          <div className="file-container">
            <img src={value} />
            <a className="btn-close" onClick={onDelete}>
              <MdClose size={15} />
            </a>
          </div>
        ) : (
          <div className="file-select">
            <label htmlFor="file">Selecione uma imagem...</label>
            <input id="file" type="file" onChange={onChange} />
          </div>
        )
      }

    </Container>
);
}

export default ImagePicker;
