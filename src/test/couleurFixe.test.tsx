/*
https://github.com/grafana/grafana/blob/master/public/app/features/dashboard/utils/panel.test.ts
*/
import { testCouleurFixe } from 'couleurFixe';

describe('testCouleurFixe', () => {
  let couleurFixe;

  describe('init', () => {
    beforeEach(() => {
      const ctrl = {
        panel: {
          tableQueryOptions: {
      //      queryType: 'coordinates',
      //      latitudeField: 'latitude',
      //      longitudeField: 'longitude'
          }
        }
      };
      couleurFixe = new CouleurFixe(ctrl);
    });

  if ('ATOS test 1', () => {
    let tableData=[];
    let data = [];

    couleurFixe.setTableValues(tableData, data);
  });

});
