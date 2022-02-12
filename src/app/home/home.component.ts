import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })
  }



}
