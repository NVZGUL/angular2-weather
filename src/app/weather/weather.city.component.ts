import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'city-index',
    template: `
    <div class="container">
        <div class="row">
            <div class="col s4" *ngFor="let city of cities">
                <weather [city]="city"></weather>
            </div>
        </div>
    </div>
    `
})
export class WeatherCityComponent {
    cities = ["london", "moscow", "paris"];
}