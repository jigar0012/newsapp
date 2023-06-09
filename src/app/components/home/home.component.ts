import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/services/newsservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor(private service: NewsserviceService) {}
  
  ngOnInit(): void {
this.headingposts();
this.featureposts();
this.featureSports()
this.featureTechnology()
this.popular();
  }


headingposts()
{
  this.service.topHeading().subscribe((result: any) => {
    this.topheadingDisplay = result.articles.slice(0,1);
    console.log(this.topheadingDisplay)
  });
  this.service.topHeading1().subscribe((result: any) => {
    this.topheadingDisplay1 = result.articles.slice(0,1);
  });
  this.service.topHeading2().subscribe((result: any) => {
    this.topheadingDisplay2 = result.articles.slice(0,1);
  });
  this.service.topHeading3().subscribe((result: any) => {
    this.topheadingDisplay3 = result.articles.slice(0,1);
  });
}

featureposts()
{
  this.service.featureEntertainment().subscribe((result: any) => {
    this.featureEntertainmentDisplay = result.articles.slice(1,2);
  });
  this.service.featureEntertainment().subscribe((result: any) => {
    this.featureEntertainmentDisplay2 = result.articles.slice(2,5);
  });
}

featureSports()
{
  this.service.featureSports().subscribe((result: any) => {
    this.featureSportsDisplay = result.articles.slice(1,2);
  });
  this.service.featureSports().subscribe((result: any) => {
    this.featureSportsDisplay1 = result.articles.slice(2,5);
  });
}

featureTechnology()
{
  this.service.featureTechnology().subscribe((result: any) => {
    this.featureTechnologyDisplay = result.articles.slice(1,2);
  });
  this.service.featureTechnology().subscribe((result: any) => {
    this.featureTechnologyDisplay1 = result.articles.slice(2,5);
  });
}

popular()
{
  this.service.popular().subscribe((result: any) => {
    this.popularDisplay = result.articles.slice(0,6);
  });
}
  
}
