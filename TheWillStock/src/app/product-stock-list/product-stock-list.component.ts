import { Component } from '@angular/core';
@Component({
  selector: 'app-product-stock-list',
  templateUrl: './product-stock-list.component.html',
  styleUrls: ['./product-stock-list.component.scss'],
})
export class ProductStockListComponent {
  data = [
    { column1: 'value1', column2: 'value2' },
    { column1: 'value3', column2: 'value4' },
  ];
  dataTable: PeriodicElement[] = [
    { id: 1, product_name: 'Camisas', category_name: 'Vestuário', quantity: 4 },
    { id: 2, product_name: 'Calças', category_name: 'Vestuário', quantity: 5 },
    {
      id: 3,
      product_name: 'Jaquetas',
      category_name: 'Vestuário',
      quantity: 8,
    },
  ];
}

export interface PeriodicElement {
  id: number;
  product_name: string;
  category_name: string;
  quantity: number;
}
