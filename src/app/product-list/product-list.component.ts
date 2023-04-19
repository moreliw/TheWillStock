import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  dataTable: PeriodicElement[] = [
    { id: 1, product_name: 'Camisas', category_name: 'Vestuário', quantity: 4, weight: 1.0079 },
    { id: 2, product_name: 'Calças', category_name: 'Vestuário', quantity: 5, weight: 4.0026 },
    {
      id: 3,
      product_name: 'Jaquetas',
      category_name: 'Vestuário',
      quantity: 8,
      weight: 6.941,
    },
  ];


}

export interface PeriodicElement {
  id: number;
  product_name: string;
  category_name: string;
  quantity: number;
  weight: number;
}
