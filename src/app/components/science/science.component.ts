import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsserviceService } from 'src/app/services/newsservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit{

  topheadingDisplay: any= [];
  topheadingDisplay1: any= [];
  topheadingDisplay2: any= [];
  topheadingDisplay3: any= [];
  featureEntertainmentDisplay: any= [];
  popularDisplay: any = [];
  currentPage = 1;
  totalPages = 0;
  pagedFeatureEntertainmentDisplay: any[] = [];
  totalPagesArray: number[] = [];

  constructor(private service: NewsserviceService,private route: ActivatedRoute){}



  ngOnInit(): void {
    this.headingposts();
    this.entertainment();
    this.popular();
  }

  headingposts()
  {
    this.service.topHeading().subscribe((result: any) => {
      this.topheadingDisplay = result.articles.slice(5,6);
      console.log(this.topheadingDisplay)
    });
    this.service.topHeading1().subscribe((result: any) => {
      this.topheadingDisplay1 = result.articles.slice(5,6);
    });
    this.service.topHeading2().subscribe((result: any) => {
      this.topheadingDisplay2 = result.articles.slice(5,6);
    });
    this.service.topHeading3().subscribe((result: any) => {
      this.topheadingDisplay3 = result.articles.slice(5,6);
    });
  }

  entertainment()
  {
    this.service.featureScience().subscribe((result: any) => {
      this.featureEntertainmentDisplay = result.articles;
      this.fetchFeatureEntertainment(this.currentPage);
    });

    
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1; // "+" is used to convert string to number
      this.featureEntertainmentDisplay(this.currentPage);
    });

  }

  popular()
  {
    this.service.popular().subscribe((result: any) => {
      this.popularDisplay = result.articles.slice(0,6);
    });
  }

  
  fetchFeatureEntertainment(page: number): void {
    // Perform pagination logic
    const itemsPerPage = 6; // Number of items to display per page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    this.pagedFeatureEntertainmentDisplay = this.featureEntertainmentDisplay.slice(startIndex, endIndex);

    // Update current page and total pages
    this.currentPage = page;
    this.totalPages = Math.ceil(this.featureEntertainmentDisplay.length / itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

}
