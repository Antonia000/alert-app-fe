import { HoroscopeSign } from '../helpers/horoscope-signs';

export interface HoroscopeDto {
  sign: HoroscopeSign;
  data: string;
  ro_data: string;
  date: string;
}

export interface HoroscopeCard {
  sign: HoroscopeSign;
  title: string;
  data: string;
  ro_data: string;
  date: string;
}
