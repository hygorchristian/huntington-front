import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import Check from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Cancel';

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
  const content = row[field.name];

  if (field.type === 'number') {
    return <Number>{content}</Number>;
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
