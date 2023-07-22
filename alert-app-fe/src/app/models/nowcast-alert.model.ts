import { AlertType } from './alert-type.enum';

export interface NowcastAlert {
  tipMesaj: string;
  numeTipMesaj: string;
  dataInceput: string;
  dataSfarsit: string;
  zona?: string;
  semnalare: string;
  culoare: string;
  numeCuloare: string;
  modificat: string;
  creat: string;
}
export interface NowcastAlertMap {
  intensitate: string;
  semnalare: string;
  data: string;
  durata: string;
  judet: string;
}
