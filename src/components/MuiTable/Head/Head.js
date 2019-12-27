import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function Head(props) {
  const {
    classes, onRequestSort, headCells, order, sort
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.name}
            align={headCell.type === 'number' ? 'right' : headCell.type === 'boolean' ? 'center' : 'left'}
            sortDirection={sort === headCell.name ? order.toLowerCase() : false}
          >
            <TableSortLabel
              active={sort === headCell.name}
              direction={order.toLowerCase()}
              onClick={createSortHandler(headCell.name)}
            >
              {headCell.label}
              {sort === headCell.name ? (
                <span className={classes.visuallyHidden}>
                  {order === 'DESC' ? 'sorted descending' : 'sorted ascending'}
                </span>
                ) : null}
            </TableSortLabel>
          </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

export default Head;
