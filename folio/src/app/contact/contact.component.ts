import { UtilitiesService } from './../utilities.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public duration: number = 0;

  constructor(private router: Router, public utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.utilitiesService.durationObservable.subscribe(duration => this.duration = duration);
  }

  public navigateToMyLinkedInProfile() {
    this.router.navigateByUrl("https://www.linkedin.com/in/rados%C5%82aw-jakubowski-ab1597101/");
  }
}
