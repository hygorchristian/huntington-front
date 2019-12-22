function createData(id, nome, email, interesse_doar, apta, status) {
  return {
    id, nome, email, interesse_doar, apta, status
  };
}

const rows = [
  createData('123456', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123457', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123458', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123451', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123452', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123453', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123455', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123450', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123450', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
  createData('123450', 'Maria Carolina do Rosário', 'emaildoadora@email.com.br', true, 'apta', 'Em andamento'),
];

export default rows;
