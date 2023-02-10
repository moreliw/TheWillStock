import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
