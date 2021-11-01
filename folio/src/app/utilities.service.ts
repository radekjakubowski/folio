import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public isSettingsModalOpen = false;
  public durationObservable: Subject<number> = new Subject();

  constructor(private router: Router) { }

  public navigateHome(): void {
    this.router.navigateByUrl('');
  }

  public openSettingsModal(): void {
    this.isSettingsModalOpen = !this.isSettingsModalOpen;
  }
}
