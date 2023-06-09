import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/services/newsservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topheadingDisplay: any= [];
  topheadingDisplay1: any= [];
  topheadingDisplay2: any= [];
  topheadingDisplay3: any= [];
  featureEntertainmentDisplay: any= [];
  featureEntertainmentDisplay2: any= [];
  featureSportsDisplay: any= [];
  featureSportsDisplay1: any= [];
  featureTechnologyDisplay: any = [];
  featureTechnologyDisplay1: any = [];
  popularDisplay: any = [];
  isMobileMenuOpen: boolean = false;
  location!: string;
  temperature!: string;
  weatherIcon!: string;

  constructor(private service: NewsserviceService,private http: HttpClient) {}
  
  ngOnInit(): void {

    this.getWeatherData();

    
  }
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  getWeatherData() {
    const apiKey = '485be62f717422faf60eb8d39fddc19c';
    const city = 'Ahmedabad';
    const country = 'IN';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
  
    this.http.get(apiUrl)
      .subscribe((weatherData: any) => {
        this.location = `${weatherData.name}, ${weatherData.sys.country}`;
        this.temperature = `${Math.round(weatherData.main.temp)}°C`;
        this.weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      }, (error) => {
        console.log(error);
      });
  }
  
}
