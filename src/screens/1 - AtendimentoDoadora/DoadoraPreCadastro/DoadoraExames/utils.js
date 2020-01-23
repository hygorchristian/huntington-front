import lodash from 'lodash';


/*
* Esta função irá receber um array de exames, ordernar por data e popular em um
* objeto com os tipos de exames possível, com o objetivo de saber quais exames
* possuem uma data para adicionar um resultado e quais ainda não o possuem
*/

export const populateInitialExams = (arrExams) => {
  const orderedArr = lodash.orderBy(arrExams, ['collect_date'], ['desc']);

  const exams = {
    aborh: null,
    sorologias: null,
    cariotipo: null,
    chlamidia: null,
    citologia: null,
    cgt: null,
    dna: null,
  };

  console.tron.log({ orderedArr });

  for (const exam of orderedArr) {
    if (!exams[exam.name]) {
      exams[exam.name] = exam;
    }
  }

  return exams;
};
