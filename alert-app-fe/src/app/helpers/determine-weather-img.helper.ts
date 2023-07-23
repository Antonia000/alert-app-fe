import { WeatherConditions } from '../models/weather-forecast.model';

export function determineWeatherCardImg(neb: string) {
  const options = WeatherConditions;
  switch (neb) {
    case options.CPN:
      return 'cpn.jpg';
      break;
    case options.CA:
      return 'ca.jpg';
      break;
    case options.CS:
      return 'cs.jpg';
      break;
    case options.IND:
      return 'ind.jpg';
      break;
    default:
      return 'ind.jpg';
  }
}
