import {
 format, differenceInYears,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';


export const getMes = (m) => {
  switch (m) {
    case 0: return 'Janeiro';
    case 1: return 'Fevereiro';
    case 2: return 'Março';
    case 3: return 'Abril';
    case 4: return 'Maio';
    case 5: return 'Junho';
    case 6: return 'Julho';
    case 7: return 'Agosto';
    case 8: return 'Setembro';
    case 9: return 'Outubro';
    case 10: return 'Novembro';
    case 11: return 'Dezembro';
  }
};

export const formatarMesAno = (m, y) => `${getMes(m)} / ${y}`;

export const formatarDiaMesAno = (data) => {
  const pattern = 'dd/MM/yyyy';
  return format(new Date(data), pattern, { locale: ptBR });
};

export const formatIdade = (val) => {
  const date = new Date(val);
  const age = differenceInYears(new Date(), date);
  const formatted = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return `${age} anos, ${formatted}`;
};
