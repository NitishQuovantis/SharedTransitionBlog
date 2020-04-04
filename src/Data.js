export const BmiData = [
  {
    name: 'Under Weight',
    inRangeIcon: require('./icons/UnderWeight-white.png'),
    outRangeIcon: require('./icons/UnderWeight-white.png'),
    maxValue: 18.9,
    minValue: 15,
    range: [15, 16, 17, 18, 18.9],
    colorLight: '#81DEF8',
    colorDark: '#00AFF3',
    cardColor: 'rgba(236,251,255,1)',
    isUserInRange: false,
    borderColor: '#64DDFF',
  },
  {
    name: 'Normal',
    inRangeIcon: require('./icons/Normal-white.png'),
    outRangeIcon: require('./icons/Normal-white.png'),
    minValue: 19,
    maxValue: 25.9,
    range: [19, 20, 21, 22, 23, 24, 25.9],
    colorLight: 'rgba(150,222,78,1)',
    colorDark: 'rgba(110,174,64,1)',
    isUserInRange: false,
    cardColor: 'rgba(242,251,233,1)',
    borderColor: '#96DE4E',
  },

  {
    name: 'Pre-Obese',
    inRangeIcon: require('./icons/PreObese-white.png'),
    outRangeIcon: require('./icons/PreObese-white.png'),
    minValue: 26,
    maxValue: 30.9,
    range: [26, 27, 28, 29, 30, 30.9],
    colorLight: '#F8BA34',
    colorDark: '#DBA200',
    isUserInRange: false,
    cardColor: 'rgba(254,250,233,1)',
    borderColor: '#F8BA34',
  },

  {
    name: 'Obesity Class 1',
    inRangeIcon: require('./icons/ObesityClass1-white.png'),
    outRangeIcon: require('./icons/ObesityClass1-white.png'),
    minValue: 31,
    maxValue: 35.9,
    range: [31, 32, 33, 34, 35, 35.9],
    colorLight: '#F48E49',
    colorDark: '#EB7322',
    isUserInRange: false,
    cardColor: 'rgba(254,243,233,1)',
    borderColor: '#F48E49',
  },

  {
    name: 'Obesity Class 2',
    inRangeIcon: require('./icons/Obesityclass2.png'),
    outRangeIcon: require('./icons/Obesityclass2.png'),
    minValue: 36,
    maxValue: 40.9,
    range: [36, 37, 38, 39, 40, 40.9],
    colorLight: '#ED485C',
    colorDark: '#E11D35',
    isUserInRange: false,
    cardColor: 'rgba(255,242,243,1)',
    borderColor: '#ED485C',
  },

  {
    name: 'Obesity Class 3',
    inRangeIcon: require('./icons/ObesityClass3-white.png'),
    outRangeIcon: require('./icons/ObesityClass3-white.png'),
    minValue: 41,
    maxValue: 49,
    range: [41, 42, 43, 44, 45, 46, 47, 48, 49],
    colorLight: '#BA3433',
    colorDark: '#A50A09',
    isUserInRange: false,
    cardColor: 'rgba(243,236,236,1)',
    borderColor: '#BA3433',
  },
];

// from 5feet to 7feet
export const MIN_INCH_VALUE = 60;
export const MAX_INCH_VALUE = 84;
export const FeetScale = Array.from(
  {length: MAX_INCH_VALUE - MIN_INCH_VALUE + 1},
  (_, index) => index + MIN_INCH_VALUE,
);

// from 150,153,156 ........ (increment based on interval)
export const MIN_CM_VALUE = 150;
export const MAX_CM_VALUE = 250;
const interval = 3;
const lengthOfCMScale =
  Math.floor((MAX_CM_VALUE - MIN_CM_VALUE) / interval) + 1;
export const CMScale = Array.from({length: lengthOfCMScale}, (_, index) => {
  return interval * index + MIN_CM_VALUE;
});
