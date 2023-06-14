import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  p: number = 1;
  supplierListMock: Customers[] = [
    { id: 1, nome: 'William'},
    { id: 2, nome: 'Daniel' },
    { id: 3, nome: 'Graciane' },
    { id: 4, nome: 'Ellen' },
  ];
}

export interface Customers {
  id: number;
  nome: string;
}
