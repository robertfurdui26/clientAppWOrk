import { Component } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  products: Product[] = [];

  constructor(private shopService : ShopService ){}

  ngOnInit(): void {
   this.shopService.getProducts().subscribe((result: Product[]) => (this.products = result));
}
}
