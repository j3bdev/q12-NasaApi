import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { ImgOfTheDay } from './models/imgOfTheDay.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'q12-nasa';
  imgOfTheDay: ImgOfTheDay = new ImgOfTheDay();

  constructor(public NasaService: NasaService) {}

  ngOnInit(): void {
    this.NasaService.getImageOfTheDay().subscribe((response) => {
      this.imgOfTheDay = response;
    });
  }
}
