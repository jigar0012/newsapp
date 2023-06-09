import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://newsapi.org/v2/top-headlines?country=in&"
  apikey = "992d2172d661417a9c558ed77a38812a"

  //heading
  topHeading(){
    return this.http.get(`${this.baseurl}category=sports&apiKey=${this.apikey}`);
  }
  topHeading1(){
    return this.http.get(`${this.baseurl}category=science&apiKey=${this.apikey}`);
  }
  topHeading2(){
    return this.http.get(`${this.baseurl}category=technology&apiKey=${this.apikey}`);
  }
  topHeading3(){
    return this.http.get(`${this.baseurl}category=business&apiKey=${this.apikey}`);
  }


  //entertainmet
  featureEntertainment(){
    return this.http.get(`${this.baseurl}category=entertainment&apiKey=${this.apikey}`);
  }

  //sports
  featureSports(){
    return this.http.get(`${this.baseurl}category=sports&apiKey=${this.apikey}`);
  }

  //technology
  featureTechnology(){
    return this.http.get(`${this.baseurl}category=technology&apiKey=${this.apikey}`);
  }

  //business
  featureBusiness(){
    return this.http.get(`${this.baseurl}category=business&apiKey=${this.apikey}`);
  }

  //general
  featureGeneral(){
    return this.http.get(`${this.baseurl}category=general&apiKey=${this.apikey}`);
  }

  //science
  featureScience(){
    return this.http.get(`${this.baseurl}category=science&apiKey=${this.apikey}`);
  }

  //health
  featureHealth(){
    return this.http.get(`${this.baseurl}category=health&apiKey=${this.apikey}`);
  }

  //popular
  popular(){
    return this.http.get(`${this.baseurl}apiKey=${this.apikey}`); 
  }

  
  
  
}
