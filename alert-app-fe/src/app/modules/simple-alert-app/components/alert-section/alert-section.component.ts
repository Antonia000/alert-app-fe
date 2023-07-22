import { Component, Input } from '@angular/core';
import { removeAccentString } from 'src/app/helpers/accents.helper';
import { counties } from 'src/app/helpers/ro-counties.helper';
import { AlertType } from 'src/app/models/alert-type.enum';
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
  @Input() alerts: NowcastAlert[] = [];
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
        case 'Papayas':
          culoare = AlertType.rosu;
          break;
        default:
          culoare = AlertType.galben;
      }
      const durata: string = `${alert.dataInceput.split('T')[1]} - ${
        alert.dataSfarsit.split('T')[1]
      }`;
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

        return theCounties.length > 1
          ? `Judetele ${theCounties.map((county) => county)}`
          : `Judetul ${theCounties}`;
      };
      const judet = customLogicForJudet();

      return {
        intensitate: culoare,
        data: data,
        durata: durata,
        judet: judet,
        semnalare: alert.semnalare,
      };
    });
  }
}
