import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { NetworkService } from '../../common/network.service'

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css'],
})
export class LocationForecastComponent implements OnInit {
  constructor(private network: NetworkService) {}

  ngOnInit(): void {
    console.log(
      this.network
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=Belfast&cnt=10&appid=${environment.api_key}&units=metric&lang=nl`,
        )
        .subscribe((test: any) => {
          console.log({ test })
        }),
    )
  }
}
