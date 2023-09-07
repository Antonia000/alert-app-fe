export interface GeneralAlertDto {
  numeTipMesaj: string;
  dataAparitiei: string;
  dataExpirarii: string;
  culoare: string;
  numeCuloare: string;
  fenomeneVizate: string;
  mesaj: string;
  judete: string[];
}

export interface GeneralAlert {
  dataInceput: string;
  dataSfarsit: string;
  zona?: string;
  semnalare: string;
  culoare: string;
  numeCuloare: string;
}
