import { UtilitiesService } from './utilities.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private colours: string[] = ['red', 'blue', 'orange'];
  public currentColour: string = '';
  title = 'Radosław Jakubowski';

  constructor(public utilitiesService: UtilitiesService) {
  }

  ngOnInit(): void {
  }
}
