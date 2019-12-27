export const urlParams = (payload) => {
  let search = '?';
  const arr = Object.keys(payload);

  arr.forEach((key, index) => {
    if (payload[key]) {
      if (index !== 0) {
        search += '&';
      }
      search += `${key}=${payload[key]}`;
    }
  });

  return search;
};

export const getParams = (arr) => {
  const url_params = new URLSearchParams(window.location.search);
  const params = {};
  arr.forEach((cfield) => {
    const [field, def] = cfield.split(':');
    params[field] = url_params.get(field) || def;
  });

  return params;
};

export const strapiParams = (payload) => {
  const search = {};

  if (payload.perPage) {
    search._limit = payload.perPage;
  }

  if (payload.page && payload.perPage) {
    // todo: verificar se essa conta da paginação está correta
    search._start = payload.perPage * (payload.page - 1);
  }

  // if (payload.filter) {
  //   search += `_start=${payload.perPage * (payload.page - 1) + 1}`;
  //   search += '&';
  // }

  if (payload.sort && payload.order) {
    search._sort = `${payload.sort}:${payload.order}`;
  }

  if (payload.q) {
    search._query = payload.q;
  }

  return search;
};
