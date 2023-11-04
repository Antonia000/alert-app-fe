import { HoroscopeSign, HoroscopeSignToRo } from '../helpers/horoscope-signs';

export interface HoroscopeDto {
  sign: HoroscopeSignToRo;
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
