import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WeatherData } from './model/WeatherData';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {  }
    
    private weatherData: WeatherData = null;

    getData() {
        return this.weatherData;
    }

    addWeatherData(data: WeatherData) {
        this.weatherData = data;
    }

    getWeatherData(city: String): Observable<any> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=31d586541cf3ea4806fbaa88c38804bc&units=metric`)
            .map(res => res.json())
            .catch((err) => Observable.throw(err.json() || 'Server error'))
    }
}