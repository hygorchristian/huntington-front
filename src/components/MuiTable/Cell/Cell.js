import React from 'react';
import lodash from 'lodash';
import { format } from 'date-fns';

import TableCell from '@material-ui/core/TableCell';
import Check from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Cancel';
import { isEmpty } from '~/utils/string';

function Number({ children }) {
  return (
    <TableCell align="right">
      {children}
    </TableCell>
  );
}

function Bool({ children }) {
  return (
    <TableCell align="center">
      {children ? (
        <Check color="primary" />
      ) : (
        <Close color="error" />
      )}
    </TableCell>
  );
}

function Cell({ field, row, ...props }) {
  // const content = row[field.name];
  const content = lodash.get(row, field.name.split('.')); // deep fields

  if (isEmpty(content)) {
    return (
      <TableCell align="left"> - </TableCell>
    );
  }

  if (field.type === 'number') {
    return <Number>{content}</Number>;
  }

  if (field.type === 'date') {
    const date = new Date(content);
    const formated = format(date, 'dd/MM/yyyy');
    return (
      <TableCell align="left">
        {formated}
      </TableCell>
    );
  }

  if (field.type === 'boolean') {
    return <Bool>{content}</Bool>;
  }

  return (
    <TableCell align="left">
      {content}
    </TableCell>

  );
}

export default Cell;
