export class WeatherData{
    constructor(
        public city: String,
        public temperature: number,
        public pressure: number,
        public wet: number,
        public wind_speed: number
    ){}
}