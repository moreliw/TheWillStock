import { Component } from '@angular/core';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent {
  dataTable: PeriodicElement[] = [
    { category_name: "Camisa" },
    { category_name: "Casaco" },
    { category_name: "Calça" },
    { category_name: "Bermuda" },
  ];
}
export interface PeriodicElement {
  category_name: string;
}
