import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

interface RateDateRates {
  [k: string]: { [k: string]: number }
}

// interface RateData {
  interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
  // start_at: string;
  // base: string;
  // end_at: string;
  // rates: RateDateRates;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  // baseRate = 'EUR';
  // symbols = 'USD,GBP';
  temperatures: any; 

  // startDate: string;
  // endDate: string;
  // rates: any[];
  // temperatures = any();

  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<WeatherData>(this.getTemperaturesUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: WeatherData): void {
    // this.startDate = data.start_at;
    // this.endDate = data.end_at;
    // this.rates = Object.entries(data.rates)
    this.temperatures = Object.entries(data)
    .map(divainiba=>({
      index: divainiba[0],
      w: divainiba[1]

    }));
  }

  // // getRatesUrl(): string {
    getTemperaturesUrl(): string {
    return environment.TemperaturesUrl
  //     // .replace('{base}', this.baseRate)
  //     // .replace('{symbols}', this.symbols);
  }
}
