import { Component } from '@angular/core';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  dataTable: Category[] = [
    {
      id: '1',
      category_name: "Camisa"
    },
    {
      id: '2',
      category_name: "Casaco"
    },
    {
      id: '3',
      category_name: "Calça"
    },
    {
      id: '4',
      category_name: "Bermuda"
    },
  ];
}
export interface Category {
  id: string;
  category_name: string;
}
