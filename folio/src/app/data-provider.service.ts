import { Injectable } from '@angular/core';
import { Stats } from './models/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private stats: Stats[] = [];

  constructor() {
    this.stats = [
      {
        name: 'Wiek',
        value: new Date().getFullYear() - 1994,
        unit: 'lat'
      },
      {
        name: 'Miejsce zamieszkania',
        value: 'okolice Nowego Sącza'
      },
      {
        name: 'Dni jako programista',
        value: this.getDayCount(new Date('2020-06-13')),
      },
      {
        name: 'Dni jako profesjonalny programista',
        value: this.getDayCount(new Date('2021-06-01')),
      }
    ]
  }
  
  private getDayCount(date: Date): number {
    const oneDay = 1000 * 60 * 60 * 24;
    const timeNow = Date.now();

    const differenceInTime = timeNow - date.getTime();

    return parseInt((differenceInTime / oneDay).toFixed(0));
  }

  public getStats(): Stats[] {
    return this.stats;
  }
}
