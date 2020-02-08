import jwt from 'jsonwebtoken';
import { isAfter } from 'date-fns';

const JWT_SECRET = 'HUNTINGTON';

export const encode = (obj) => new Promise((resolve, reject) => {
  jwt.sign({
    data: { ...obj },
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }, JWT_SECRET, (err, token) => {
    if (err) {
      reject(err);
    }

    resolve(token);
  });
});

export const decode = (token) => new Promise((resolve, reject) => {
  if (!token) {
    reject({
      name: 'InvalidToken',
      message: 'invalid token'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      reject(err);
    }

    resolve(decoded);
  });
});

export const isValid = (date) => {
  const today = new Date();
  const toCompare = new Date(date);


  return isAfter(toCompare, today);
};
