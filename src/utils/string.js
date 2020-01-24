export const isEmpty = (str) => {
  if (!str) {
    return true;
  }
  if (str.length === 0) {
    return true;
  }
  return false;
};

export const formatAddress = (address) => {
  let res = '';

  if (address.address) {
    res += `${address.address}, `;
  }
  if (address.address_comp) {
    res += `${address.address_comp}, `;
  }
  if (address.address_number) {
    res += `${address.address_number}, `;
  }
  if (address.cep) {
    res += `${address.cep}`;
  }

  return res;
};
