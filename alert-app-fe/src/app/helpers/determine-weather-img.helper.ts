import { WeatherConditions } from '../models/weather-forecast.model';

export function determineWeatherCardImg(neb: string) {
  const romaniaLatitude = 43.66667;
  const isDayTime = isDaytime(romaniaLatitude);

  const conditions = WeatherConditions;

  if (isDayTime) {
    switch (neb) {
      case conditions.CPND:
        return 'cpnd.jpg';
        break;
      case conditions.CAD:
        return 'cad.jpg';
        break;
      case conditions.CSD:
        return 'csd.jpg';
        break;
      case conditions.INDD:
        return 'indd.jpg';
        break;
      default:
        return 'indd.jpg';
    }
  } else {
    switch (neb) {
      case conditions.CPNN:
        return 'cpnn.jpg';
        break;
      case conditions.CAN:
        return 'can.jpg';
        break;
      case conditions.CSN:
        return 'csn.jpg';
        break;
      case conditions.INDN:
        return 'indn.jpg';
        break;
      default:
        return 'indn.jpg';
    }
  }
}

// Function to get the sunrise and sunset times based on the user's latitude
function getSunriseSunset(latitude: number) {
  const now = new Date();
  const newYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Number(now) - Number(newYear)) / 8.64e7);
  const radians = (latitude * Math.PI) / 180;
  const declination = 0.4093 * Math.sin((2 * Math.PI * dayOfYear) / 365 - 1.39);
  const timeOffset = 12 * (1 + Math.tan(radians) * Math.tan(declination));

  const sunrise = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    Math.floor(12 - timeOffset),
    0,
    0
  );
  const sunset = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    Math.floor(12 + timeOffset),
    0,
    0
  );

  return { sunrise, sunset };
}

// Function to determine if it's daytime or nighttime
function isDaytime(latitude: number) {
  const currentTime = new Date();
  const { sunrise, sunset } = getSunriseSunset(latitude);

  return currentTime > sunrise && currentTime < sunset;
}
