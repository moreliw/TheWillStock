import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-stock-list',
  templateUrl: './product-stock-list.component.html',
  styleUrls: ['./product-stock-list.component.scss'],
})
export class ProductStockListComponent implements OnInit{

  public productForm: FormGroup;

  public productList: Product[] = [
    { id: 1, product_name: 'Camisas', category_name: 'Vestuário', quantity: 4 },
    { id: 2, product_name: 'Calças', category_name: 'Vestuário', quantity: 5 },
    { id: 3, product_name: 'Jaquetas', category_name: 'Vestuário', quantity: 8, },
  ];

  public product: Product;
  public selectedProduct = false;
  public teste: string;

  constructor(private form: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.productForm = this.form.group({
      product_name: ['', Validators.required],
      category_name: [''],
      quantity: ['', Validators.required]
    });
  }

  stockCreate() {
    console.log(this.productForm.value)
  }

  productSelected(product: Product) {
    this.selectedProduct = true;
    this.productForm.patchValue(product);
  }

  back() {
    this.selectedProduct = false;
    this.product = null;
  }
}
