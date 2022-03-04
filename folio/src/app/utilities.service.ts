import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public isSettingsModalOpen = false;
  public isCustomThemeModalOpen = false;
  public durationObservable: Subject<number> = new Subject();
  public themeSubject: Subject<string> = new Subject();

  constructor(private router: Router) { }

  public navigateHome(): void {
    this.router.navigateByUrl('');
  }

  public openSettingsModal(): void {
    this.isSettingsModalOpen = !this.isSettingsModalOpen;
  }

  public setTheme(theme: string): void {
    if (theme !== 'christmas') {
      localStorage.setItem('folio-theme', theme);
    }

    this.themeSubject.next(theme);
  }
}
