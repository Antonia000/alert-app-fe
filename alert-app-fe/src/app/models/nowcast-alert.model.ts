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
  data_height?: string;
  durata: string;
  judet: string;
  toggle?: boolean;
}
