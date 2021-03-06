import { RegionClass } from '../Models/RegionClass';

export const regionSvg: RegionClass = {
  colorMode: false,
  coords: {
    xMax: '0',
    xMin: '0',
    yMax: '0',
    yMin: '0',
  },
  id: 1,
  idSVG: 'path147',
  img: '',
  label: 'PC',
  linkURL: {
    followLink: '',
    hoveringTooltipLink: '',
    hoveringTooltipText: '',
  },
  lowerLimit: [
    {
      backColor: '#FF00FF',
      borderColor: '#7FFF00',
      id: 0,
      lowerLimitMax: '',
      lowerLimitMin: '',
      sizeBorder: '3',
    },
  ],
  mainMetric: {
    format: '',
    key: '',
    keyValue: '',
    manageValue: 'avg',
    refId: 'A',
    returnQuery: [
      {
        name: '{instance="localhost:9090",job="prometheus"}',
        refId: 'A',
        fields: [
          {
            name: '{instance="localhost:9090",job="prometheus"}',
            type: 'number',
            config: {},
            values: {
              buffer: [
                0.00010687460908403869,
                0.0001602765718073289,
                0.0001602765718073289,
                0.0001602765718073289,
                0.00010682639989177438,
                0.00010682639989177438,
                0.00010682639989177438,
                0.00010682639989177438,
                0.00010682639989177438,
              ],
            },
            labels: {
              instance: 'localhost:9090',
              job: 'prometheus',
            },
            calcs: null,
          },
          {
            name: 'Time',
            type: 'time',
            config: {},
            values: {
              buffer: [
                1584615120000,
                1584615135000,
                1584615150000,
                1584615165000,
                1584615180000,
                1584615195000,
                1584615210000,
                1584615225000,
                1584615240000,
              ],
            },
            calcs: null,
          },
        ],
        length: 9,
      },
    ],
    unit: '',
  },
  meta: '',
  metrics: [],
  mode: true,
  orientedLink: [],
  positionParameter: {
    labelAPositionX: '0',
    labelAPositionY: '0',
    labelBPositionX: '0',
    labelBPositionY: '0',
    tooltipPositionA: {},
    tooltipPositionB: {},
  },
  textObj: {
    colorBack: 'rgba(255, 255, 255, 0)',
    colorText: 'rgba(0, 0, 0, 1)',
    generateAuxiliaryElement: {
      addColorBackElement: false,
      addColorTextElement: false,
      colorBackElement: 'black',
      colorTextElement: 'white',
      displayObjectInText: false,
      displayObjectPermanently: false,
      legendElement: '',
      numericFormatElement: '',
      unityMesureElement: '',
    },
    generateObjectText: false,
    isTextRegion: false,
    legend: '',
    styleText: '',
    unit: '',
    value: '',
    valueGenerateObjectText: {
      addColorBackElement: false,
      addColorTextElement: false,
      colorBackElement: 'black',
      colorTextElement: 'white',
      displayObjectInText: false,
      displayObjectPermanently: false,
      legendElement: '',
      numericFormatElement: '',
      unityMesureElement: '',
    },
  },
  traceBack: true,
  traceBorder: true,
};
