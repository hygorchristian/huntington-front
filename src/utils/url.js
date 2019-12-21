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
