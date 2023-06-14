import { Component } from '@angular/core';
import { Category } from '../models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  p: number = 1;
  dataTable: Category[] = [
    {
      id: 1,
      nome: "Camisa",
      descricao: 'Produtos de boa qualidade'
    },
    {
      id: 2,
      nome: "Casaco",
      descricao: 'Produtos de boa qualidade'
    },
    {
      id: 3,
      nome: "Calça",
      descricao: 'Produtos de boa qualidade'
    },
    {
      id: 4,
      nome: "Bermuda",
      descricao: 'Produtos de boa qualidade'
    },
  ];
}
