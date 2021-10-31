import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor(private router: Router) { }

  public navigateHome(): void {
    this.router.navigateByUrl('');
  }
}
