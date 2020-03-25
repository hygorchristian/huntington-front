import lodash from 'lodash';
import React from 'react';

/*
* function: populateInitialExams
*
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


  for (const exam of orderedArr) {
    if (!exams[exam.name]) {
      exams[exam.name] = exam;
    }
  }

  return exams;
};

/*
* function: populateProgrammedExams
*
* Esta função irá receber um array de exames para doadora programada, ordernar
* por data e popular em um objeto com os tipos de exames possível, com o
* objetivo de saber quais exames possuem uma data para adicionar um resultado
* e quais ainda não o possuem
*/

export const populateProgrammedExams = (arrExams) => {
  const orderedArr = lodash.orderBy(arrExams, ['collect_date'], ['desc']);

  const exams = {
    zika: null,
    fsh: null
  };


  for (const exam of orderedArr) {
    if (!exams[exam.name]) {
      exams[exam.name] = exam;
    }
  }

  return exams;
};

/*
* function: groupExams
*
* Esta função irá receber um array de exames, agrupar pela mesma data de coleta
* e retornar com um objeto cujo as chaves serão a data
*/

export const groupExams = (arrExams) => {
  const groupedExams = {};
  arrExams.forEach((item) => {
    if (!groupedExams[item.collect_date]) {
      groupedExams[item.collect_date] = [];
    }
    groupedExams[item.collect_date].push(item);
  });

  return groupedExams;
};

export const getExamName = (slug) => {
  switch (slug) {
    case 'aborh':
      return 'ABO/RH';
    case 'sorologias':
      return 'Sorologias';
    case 'cariotipo':
      return 'Cariótipo';
    case 'chlamidia':
      return 'Chlamidia/Neisseria';
    case 'citologia':
      return 'Citologia Oncótica';
    case 'cgt':
      return 'CGT';
    case 'dna':
      return 'Cartão DNA';
    case 'zika':
      return 'Zika Vírus';
    case 'fsh':
      return 'E2, P4, FSH';
    default:
      return '';
  }
};
