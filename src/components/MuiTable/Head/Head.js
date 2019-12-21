import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function Head(props) {
  const {
    classes, onRequestSort, headCells
  } = props;

  const params = new URLSearchParams(window.location.search);
  const order = params.get('order') || '';
  const sort = params.get('sort') || '';


  console.tron.log({ order, sort });

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          console.tron.log({ order: sort === headCell.name ? order.toLowerCase() : false });

          return (
            <TableCell
              key={headCell.name}
              align={headCell.type === 'number' ? 'right' : 'left'}
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
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default Head;
