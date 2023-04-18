import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  teste() {
    console.log()
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
export interface PeriodicElement {
  category_name: string;
}
