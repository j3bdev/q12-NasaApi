import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  demoKey: string = '1VGlaT6YI7AZmSfvy0PaybO4tZNTRpLQ8EKFruvP';
  constructor(public http: HttpClient) {}
  public getImageOfTheDay(): Observable<object> {
    return this.http.get<object>(
      `https://api.nasa.gov/planetary/apod?api_key=${this.demoKey}`
    );
  }
}
