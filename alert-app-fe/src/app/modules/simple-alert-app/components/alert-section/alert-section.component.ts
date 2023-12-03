import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { removeAccentString } from 'src/app/helpers/accents.helper';
import { counties } from 'src/app/helpers/ro-counties.helper';
import { AlertType } from 'src/app/models/alert-type.enum';
import { GeneralAlert } from 'src/app/models/general-alert.model';
import {
  NowcastAlert,
  NowcastAlertMap,
} from 'src/app/models/nowcast-alert.model';

@Component({
  selector: 'app-alert-section',
  templateUrl: './alert-section.component.html',
  styleUrls: ['./alert-section.component.scss'],
})
export class AlertSectionComponent {
  @Input() title: string = '';
  @Input() alerts: GeneralAlert[] = [];
  mappedAlerts: NowcastAlertMap[] = [];
  alertType = AlertType;

  constructor() {}

  ngOnInit(): void {
    this.mappedAlerts = this.mapAlerts();
  }

  private mapAlerts(): NowcastAlertMap[] {
    return this.alerts.map((alert) => {
      let culoare: AlertType;
      switch (alert.numeCuloare) {
        case 'portocaliu':
          culoare = AlertType.portocaliu;
          break;
        case 'galben':
          culoare = AlertType.galben;
          break;
        case 'rosu':
          culoare = AlertType.rosu;
          break;
        default:
          culoare = AlertType.galben;
      }
      const duration: string = alert.dataInceput.includes('T')
        ? `${alert.dataInceput.split('T')[1]} - ${
            alert.dataSfarsit.split('T')[1]
          }`
        : '';

      const hours = this.setHour(duration);
      const data: string = new Date(
        `${alert.dataSfarsit.split('T')[0]}`
      ).toDateString();

      const customLogicForJudet = (): string => {
        let theCounties: string[] = [];

        if (alert.zona) {
          const zona = alert.zona ? removeAccentString(alert.zona) : '';
          theCounties = counties.filter((county) =>
            zona.includes(removeAccentString(county))
          );
        }
        if (theCounties.length > 0) {
          return theCounties.length > 1
            ? `Judetele ${theCounties.map((county) => county)}`
            : `Judetul ${theCounties}`;
        } else {
          return '';
        }
      };
      const judet = customLogicForJudet();

      return {
        intensitate: culoare,
        data: data,
        durata: hours,
        judet: judet,
        semnalare: alert.semnalare,
      };
    });
  }
  private countWords(str: string) {
    return str.trim().split(/\s+/).length;
  }
  private setHour(val: string) {
    const hours = val.split('-');
    return hours
      .map((hour) => {
        if (hour.trim().match('^[3-9][0-9]')) {
          const hourPart = hour.split(':')[0].split('').reverse().join('');
          return hourPart + ':' + hour.split(':')[1];
        }
        return hour;
      })
      .join('-');
  }

  onClick(alert: NowcastAlertMap) {
    alert.toggle = !alert.toggle;
  }
}
