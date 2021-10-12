import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { NetworkService } from '../../common/network.service'

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css'],
})
export class LocationForecastComponent implements OnInit {
  public weatherForecast$: BehaviorSubject<any> = new BehaviorSubject(null)
  public weatherCity$: BehaviorSubject<string> = new BehaviorSubject('Belfast')
  public units$: BehaviorSubject<string> = new BehaviorSubject('metric')

  constructor(private network: NetworkService) {}

  onCityChange = (city: any) => {
    this.weatherCity$.next(city.target.value)
    this.fetchWeather()
  }

  onCelciusChange = (celcius: any) => {
    this.units$.next(celcius.target.value)
    this.fetchWeather()
  }

  fetchWeather = () => {
    console.log(
      this.network
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${this.weatherCity$.value}&cnt=10&appid=${environment.api_key}&units=${this.units$.value}&lang=nl`,
        )
        .subscribe((test: any) => {
          console.log(test)
          this.weatherForecast$.next(test)
        }),
    )
  }

  ngOnInit(): void {
    this.fetchWeather()
  }
}
