import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from './Toolbar';
import Head from './Head';
import Cell from './Cell';
import { strapiParams } from '~/utils/url';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function MuiTable({
 loading, schema, data = [], onRequest
}) {
  const classes = useStyles();
  const history = useHistory();
  const routeParams = useParams();

  const [q, setQ] = useState(null);
  const [order, setOrder] = useState('ASC');
  const [sort, setSort] = useState('id');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState('10');
  const [filter, setFilter] = useState(null);

  const deps = { history, params: routeParams, };

  const handleOnSearch = (query) => {
    setQ(query);
  };

  const handleRequestSort = (event, property) => {
    const isDesc = sort === property && order === 'DESC';
    if (isDesc) {
      setOrder('ASC');
    } else {
      setOrder('DESC');
    }

    setSort(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(parseInt(newPage, 10) + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSelectFilter = (val) => {
    setFilter(val);
  };

  const handleOnAdd = () => schema.onAdd(deps);

  const handleOnClick = (id) => {
    if (schema.onClick) {
      schema.onClick(deps, id);
    }
  };

  useEffect(() => {
    const search = strapiParams({
      q, filter, sort, order, perPage, page
    });
    console.tron.log('MuiTable', { search });
    onRequest(search);
  }, [q, filter, sort, order, perPage, page]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar
          loading={loading}
          onSearch={handleOnSearch}
          onAdd={schema.onAdd && handleOnAdd}
          onSelectFilter={handleSelectFilter}
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
              sort={sort}
            />
            <TableBody>
              {data && data.map((row) => (
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
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={perPage}
          page={page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Registros por página"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to === -1 ? count : to} de ${count}`}
        />
      </Paper>
    </div>
  );
}
