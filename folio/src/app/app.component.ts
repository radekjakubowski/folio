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
  title = 'folio';

  ngOnInit(): void {
  }

  private randomIntFromInterval(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
