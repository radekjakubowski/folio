import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public isSettingsModalOpen = false;

  constructor(private router: Router) { }

  public navigateHome(): void {
    this.router.navigateByUrl('');
  }

  public openSettingsModal(): void {
    this.isSettingsModalOpen = !this.isSettingsModalOpen;
  }
}
