import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from './Toolbar';
import Head from './Head';
import { urlParams } from '~/utils/url';

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

export default function MuiTable({ schema, data = [] }) {
  const classes = useStyles();
  const history = useHistory();
  const routeParams = useParams();
  const params = new URLSearchParams(window.location.search);

  const deps = { history, params: routeParams, };

  let q = params.get('q');
  let order = params.get('order') || 'ASC';
  let sort = params.get('sort') || 'id';
  let page = params.get('page') || '1';
  let perPage = params.get('perPage') || '10';
  let filter = params.get('filter');

  const updateSearch = () => {
    const { pathname } = history.location;
    const search = urlParams({
      q,
      sort,
      order,
      page,
      perPage,
      filter
    });
    history.push({
      pathname,
      search
    });
  };

  const handleOnSearch = (query) => {
    q = query;
    updateSearch();
  };

  const handleRequestSort = (event, property) => {
    const isDesc = sort === property && order === 'DESC';
    order = isDesc ? 'ASC' : 'DESC';
    sort = property;

    updateSearch();
  };

  const handleClick = (event, name) => {
    console.tron.log(name);
  };

  const handleChangePage = (event, newPage) => {
    page = newPage + 1;
    updateSearch();
  };

  const handleChangeRowsPerPage = (event) => {
    perPage = parseInt(event.target.value, 10);
    page = 0;
    updateSearch();
  };

  const handleSelectFilter = (val) => {
    filter = val;
    updateSearch();
  };

  const handleOnAdd = () => schema.onAdd(deps);

  const handleOnClick = (id) => {
    if (schema.onClick) {
      schema.onClick(deps, id);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar
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
            />
            <TableBody>
              {data.map((row) => (
                <TableRow
                  hover
                  onClick={() => handleOnClick(row.id)}
                  role="checkbox"
                  tabIndex={-1}
                  key={row.name}
                >
                  {schema.fields.map((field) => (
                    <TableCell align={field.type === 'number' ? 'right' : 'left'}>{row[field.name]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={500}
          rowsPerPage={perPage}
          page={page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Registros por página"
          labelDisplayedRows={({ from, to, count }) => {
            console.tron.log({ from, to, count });
            return `${from}-${to === -1 ? count : to} de ${count}`;
          }}
        />
      </Paper>
    </div>
  );
}
