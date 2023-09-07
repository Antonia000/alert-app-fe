import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralAlert, GeneralAlertDto } from '../models/general-alert.model';

@Injectable({ providedIn: 'root' })
export class GeneralAlertService {
  BASE_URL: string = environment.be;
  constructor(private readonly http: HttpClient) {}

  getGeneralAlerts(): Observable<GeneralAlert[]> {
    return this.http.get<GeneralAlertDto[]>('/api' + '/general').pipe(
      map((alerts) => {
        return alerts.map((alert) => this.extractAlert(alert)).flat(1);
      }),
      catchError(() => {
        new Error('Error while fetching general alerts!');
        return of([]);
      })
    );
  }

  private extractAlert(generalAlert: GeneralAlertDto) {
    var span = document.createElement('span');
    span.innerHTML = generalAlert.mesaj;
    const innerText = span.textContent || span.innerText;

    const extractedAlerts: GeneralAlert[] = innerText
      .toLocaleLowerCase()
      .split('cod')
      .slice(1)
      .map((alert) => {
        const semnalare = alert.split(/\r?\n/)[2].trim().split('. ')[0];
        if (alert.includes('galben')) {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: '',
            semnalare: semnalare,
            culoare: 'galben',
            numeCuloare: 'galben',
          };
        } else if (alert.includes('portocaliu')) {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: '',
            semnalare: semnalare,
            culoare: 'portocaliu',
            numeCuloare: 'portocaliu',
          };
        } else {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: '',
            semnalare: semnalare,
            culoare: 'rosu',
            numeCuloare: 'rosu',
          };
        }
      });

    return extractedAlerts;
  }
}
