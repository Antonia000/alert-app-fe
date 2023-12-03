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
  CPND = 'cer partial noros',
  INDD = 'indisponibil',
  CSD = 'cer senin',
  CAD = 'cer acoperit',
  CPNN = 'cer partial noros',
  INDN = 'indisponibil',
  CSN = 'cer senin',
  CAN = 'cer acoperit',
}

export enum WeatherSeasons {
  SUMMER = 'summer',
  SPRING = 'spring',
  WINTER = 'winter',
  AUTUMN = 'autumn',
}
