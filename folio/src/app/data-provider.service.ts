import { Injectable } from '@angular/core';
import { ExperienceStep } from './models/experience-step';
import { Stats } from './models/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private stats: Stats[] = [];
  private experienceSteps: ExperienceStep[] = [];

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
    ];

    this.experienceSteps = [{
      name: 'Programista aplikacji',
      company: 'GOTOMA Software House',
      city: 'Nowy Sącz',
      monthFrom: 'sierpień',
      yearFrom: 2021,
      monthTo: '',
      yearTo: NaN,
      description: 'Programista fullstack - .NET + Angular',
      imgPath: 'assets/img/companylogos/gotoma.png'
    },
    {
      name: 'Programista aplikacji - staż',
      company: 'GOTOMA Software House',
      city: 'Nowy Sącz',
      monthFrom: 'marzec',
      monthTo: 'sierpień',
      yearFrom: 2021,
      yearTo: 2021,
      description: 'Program stażowy .NET + Angular. Pierwsze kroki w projektach komercyjnych.',
      imgPath: 'assets/img/companylogos/gotoma.png'
    },
    {
      name: 'Inżynier jakości',
      company: 'Limatherm S.A.',
      city: 'Limanowa',
      monthFrom: 'czerwiec',
      monthTo: 'lipiec',
      yearFrom: 2018,
      yearTo: 2020,
      description: 'Analizy MSA oraz SPC. Prowadzenie dokumentacji jakościowej na obszarze produkcyjnym.' +
        ' Udział w rozwiązywaniu postępowań reklamacyjnych dla klientów zagranicznych. Tworzenie standardów jakościowych oraz szkolenie pracowników obszaru produkcyjnego.',
      imgPath: 'assets/img/companylogos/lsa.png'
    },
    {
      name: 'Referent ds. zapewnienia jakości',
      company: 'Limatherm S.A.',
      city: 'Limanowa',
      monthFrom: 'marzec',
      monthTo: 'czerwiec',
      yearFrom: 2018,
      yearTo: 2018,
      description: 'Wdrożenie na stanowisko inżynierskie',
      imgPath: 'assets/img/companylogos/lsa.png'
    },
    {
      name: 'Specjalista ds. klasyfikowania i indeksowania informacji',
      company: 'Delphi Poland S.A.',
      city: 'Kraków',
      monthFrom: 'wrzesień',
      yearFrom: 2016,
      monthTo: 'lipiec',
      yearTo: 2017,
      description: 'Ocena i analiza nagrań z jazd testowych w celu budowy systemów active safety',
      imgPath: 'assets/img/companylogos/delphi.png'
    }
    ];
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

  public getExperienceSteps(): ExperienceStep[] {
    return this.experienceSteps;
  }
}
