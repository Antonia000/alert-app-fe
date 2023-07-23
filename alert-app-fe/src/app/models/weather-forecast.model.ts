export interface WeatherForecast {
  oras: string;
  temperatura: string;
  umezeala: string;
  nebulozitate: string;
  vant: string;
  data: string;
  img: string;
}

export enum WeatherConditions {
  CPN = 'cer partial noros',
  IND = 'indisponibil',
  CS = 'cer senin',
  CA = 'cer acoperit',
}
