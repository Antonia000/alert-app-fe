import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, from, map, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralAlert, GeneralAlertDto } from '../models/general-alert.model';
import { counties } from '../helpers/ro-counties.helper';
import { removeAccentString } from '../helpers/accents.helper';
import { Auth, getIdToken, authState, User } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class GeneralAlertService {
  BASE_URL: string = environment.be;
  token$: Observable<string> = of('null');

  constructor(
    private readonly http: HttpClient,
    private authService: AuthService
  ) {}

  getGeneralAlerts(): Observable<GeneralAlert[]> {
    const generslAlerts = this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<GeneralAlertDto[]>(this.BASE_URL + '/api' + '/general', headers)
          .pipe(
            map((alerts) => {
              return alerts.map((alert) => this.extractAlert(alert)).flat(1);
            }),
            catchError(() => {
              new Error('Error while fetching general alerts!');
              return of([]);
            })
          );
      })
    );
    return generslAlerts;
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

        const judete: string[] = [];

        counties.map((county) => {
          semnalare.includes(county.toLocaleLowerCase())
            ? judete.push(county)
            : '';
        });

        if (alert.includes('galben')) {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: judete.join(','),
            semnalare: semnalare,
            culoare: 'galben',
            numeCuloare: 'galben',
            judete: judete.map((judet) =>
              removeAccentString(judet.toLocaleLowerCase())
            ),
          };
        } else if (alert.includes('portocaliu')) {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: judete.join(' ,'),
            semnalare: semnalare,
            culoare: 'portocaliu',
            numeCuloare: 'portocaliu',
            judete: judete.map((judet) =>
              removeAccentString(judet.toLocaleLowerCase())
            ),
          };
        } else if (removeAccentString(alert).includes('rosu')) {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: judete.join(','),
            semnalare: semnalare,
            culoare: 'rosu',
            numeCuloare: 'rosu',
            judete: judete.map((judet) =>
              removeAccentString(judet.toLocaleLowerCase())
            ),
          };
        } else {
          return {
            dataInceput: generalAlert.dataAparitiei,
            dataSfarsit: generalAlert.dataExpirarii,
            zona: judete.join(','),
            semnalare: semnalare,
            culoare: 'galben',
            numeCuloare: 'galben',
            judete: judete.map((judet) =>
              removeAccentString(judet.toLocaleLowerCase())
            ),
          };
        }
      });

    return extractedAlerts;
  }
}
