import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'App Work';
  products: Product[] = [];

  constructor(private shopService : ShopService ){}

  ngOnInit(): void {
   this.shopService.getProducts().subscribe((result: Product[]) => (this.products = result));
}

}
