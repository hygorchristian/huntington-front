import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from './Toolbar';
import Head from './Head';
import Cell from './Cell';
import { useStyles } from './styles';
import { getSorting, stableSort } from '~/components/MuiTable/utils';

export default function MuiTable({
 loading, schema, data = [], setData, setLoading
}) {
  const classes = useStyles();
  const history = useHistory();
  const routeParams = useParams();

  const [q, setQ] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const deps = {
   history, params: routeParams, setData, setLoading
  };

  const handleOnSearch = (query) => {
    setQ(query);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOnAdd = () => schema.onAdd(deps);

  const handleOnSync = () => schema.onSync(deps);

  const handleOnClick = (id) => {
    if (schema.onClick) {
      schema.onClick(deps, id);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar
          loading={loading}
          onSearch={handleOnSearch}
          onAdd={schema.onAdd && handleOnAdd}
          onSync={schema.onSync && handleOnSync}
          deps={deps}
          filters={schema.filters}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <Head
              classes={classes}
              onRequestSort={handleRequestSort}
              headCells={schema.fields}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {data && data.length > 0 && stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    onClick={() => handleOnClick(row.id)}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                  >
                    {schema.fields.map((field) => (<Cell field={field} row={row} />))}
                  </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={(data && data.length) || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Registros por página"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to === -1 ? count : to} de ${count}`}
        />
      </Paper>
    </div>
  );
}
