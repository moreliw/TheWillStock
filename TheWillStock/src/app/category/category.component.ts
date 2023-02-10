import { Component } from '@angular/core';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
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
