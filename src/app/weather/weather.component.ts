import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { WeatherService } from './weather.service';
import { WeatherData } from './model/WeatherData';

@Component({
    selector: 'weather',
    providers: [
        WeatherService
    ],
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit{
    constructor(
        private weatherService: WeatherService
    ){ }
    private _city = '';
    @Input()
    set city(city: string) {
        this._city = city
    }

    get city(): string { return this._city; }

    weather: WeatherData

    public ngOnInit() {
        this.loadWeatherData();
        console.log('Welcome to weather component');
    }

    private loadWeatherData(){
        return this.weatherService.getWeatherData(this.city)
            .subscribe(
                data => {
                    this.weather = new WeatherData(data.name, data.main.temp, 
                        data.main.pressure, data.dt, data.wind.speed);
                    },
                err => {console.log(err)}
            )
    }
}