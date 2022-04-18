import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public holidaysService: HolidaysService) { }

  ngOnInit(): void {
  }
}
