import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  public isChristmasTime(): boolean {
    const todaysDate = new Date();

    return (todaysDate.getMonth() === 11 && todaysDate.getDate() > 19) || (todaysDate.getMonth() === 0 && todaysDate.getDate() < 2)
  }
}
