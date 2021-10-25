import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Stats } from '../models/stats.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public stats: Stats[] = [];

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.stats = this.dataProvider.getStats();
  }

}
