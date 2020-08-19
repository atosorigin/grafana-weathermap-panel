import { Metric } from 'types';
import { DataFrame } from '@grafana/data';
import { Filtred } from '../Functions/loaderGabarit';

/** search is key and keyValue is in query */
const searchNameIsKey = (query: DataFrame, mainMetric: Metric): boolean => {
  if (mainMetric.key === '' && mainMetric.keyValue === '') {
    return true;
  }
  let remove = query.name?.split('{');
  const nameQuery: string[] =
    remove![1].split(',').flatMap(value => {
      return value.replace(/[\"{}]/gm, '');
    }) || [];
  if (nameQuery && nameQuery.length > 0) {
    for (const oneQuery of nameQuery) {
      const keyValue: string[] = oneQuery.split('=');
      if (keyValue.length === 2) {
        if (keyValue[0] === mainMetric.key && keyValue[1] === mainMetric.keyValue) {
          return true;
        }
      }
    }
  }
  return false;
};

const searchNameIsFilter = (query: DataFrame, mainMetric: Metric): boolean => {
  if (!mainMetric.filter) {
    return true;
  }
  let res = 0;
  const filters: Filtred[] = mainMetric.filter;
  let remove = query.name?.split('{');
  const nameQuery: string[] =
    remove![1].split(',').map(value => {
      return value.replace(/[\"{}]/gm, '');
    }) || [];
  if (nameQuery && nameQuery.length > 0) {
    for (const oneQuery of nameQuery) {
      const keyValue: string[] = oneQuery.split('=');
      for (const filter of filters) {
        if (keyValue.length === 2) {
          if (keyValue[0] === filter.label && keyValue[1] === filter.value) {
            res++;
          }
        }
      }
    }
    // console.log(res);
    // console.log(filters.length)
    if (res === filters.length) {
      return true;
    }
  }
  return false;
};

export const getResultQuery = (mainMetric: Metric) => {
  let cnt: number | null = null;
  if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
    const debug: number[] = [];
    let countValue = 0;

    cnt = 0;
    if (!mainMetric.filter) {
      for (const line of mainMetric.returnQuery) {
        const result = searchNameIsKey(line, mainMetric);
        if (result) {
          const sizeQuery: number = line.fields[0].values.length;
          // in grafana 7 change line.field[0] to line.field[1]
          for (let i = 0; i < sizeQuery; i++) {
            if (line.fields.length > 0 && line.fields[0].values.get(i)) {
              cnt += line.fields[0].values.get(i);
              debug.push(line.fields[0].values.get(i));
              ++countValue;
            }
          }
        }
      }
      if (mainMetric.manageValue === 'avg') {
        cnt /= countValue;
      } else if (mainMetric.manageValue === 'err') {
        if (countValue > 1) {
          cnt = null;
        }
      }
    } else {
      for (const line of mainMetric.returnQuery) {
        const result = searchNameIsFilter(line, mainMetric);
        if (result) {
          const sizeQuery: number = line.fields[0].values.length;
          // in grafana 7 change line.field[0] to line.field[1]
          for (let i = 0; i < sizeQuery; i++) {
            if (line.fields.length > 0 && line.fields[0].values.get(i)) {
              cnt += line.fields[0].values.get(i);
              debug.push(line.fields[0].values.get(i));
              ++countValue;
            }
          }
        }
      }
      if (mainMetric.manageValue === 'avg') {
        cnt /= countValue;
      } else if (mainMetric.manageValue === 'err') {
        if (countValue > 1) {
          cnt = null;
        }
      }
    }
  }

  return cnt;
};
/*********************************** the best solution it's check the instant checbox in addquery */

/*****************************Other solution but there are a problem with average of node_network_up */

// export const getResultQuery = (mainMetric: Metric) => {
//   let cnt: number | null = null;
//   console.log(mainMetric.returnQuery);
//   if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
//     const debug: number[] = [];
//     let countValue = 0;

//     cnt = 0;
//     for (const line of mainMetric.returnQuery) {
//       const result = searchNameIsKey(line, mainMetric);
//       if (result) {
//         const sizeQuery: number = line.fields[0].values.length;
//         // in grafana 7 change line.field[0] to line.field[1]
//         for (let i = 0; i < sizeQuery; i++) {
//           if (line.fields.length > 0 && line.fields[0].values.get(i)) {
//             cnt += line.fields[0].values.get(i);
//             debug.push(line.fields[0].values.get(i));
//             ++countValue;
//           }
//           if (countValue > -1 && mainMetric.manageValue === 'sum') {
//             break;
//           }
//         }
//       }
//     }
//     if (mainMetric.manageValue === 'avg') {
//       cnt /= countValue;
//     } else if (mainMetric.manageValue === 'err') {
//       if (countValue > -1) {
//         cnt = null;
//       }
//     }
//     console.log(debug);
//   }

//   return cnt;
// };
