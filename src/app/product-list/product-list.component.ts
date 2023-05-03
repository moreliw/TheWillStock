import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  p: number = 1;
  dataTable: Product[] = [
    { id: 1, product_name: 'Arroz Integral', description: 'Arroz Integral 1kg', category_name: 'Arroz' },
    {
      id: 3,
      product_name: 'Granola Açaí',
      description: 'Granola + Açaí 500g',
      category_name: 'Granola',
    },
  ];
  public productForm: FormGroup;
  addProduct: boolean;
  public product: Product;
  public teste: string;

  constructor(private form: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.productForm = this.form.group({
      id: ['', Validators.required],
      product_name: ['', Validators.required],
      description: [''],
      category_name: ['', Validators.required]
    });
  }

  stockCreate() {
    console.log(this.productForm.value)
  }

  productSelected(product: Product) {
    this.addProduct = true;
    this.productForm.patchValue(product);
  }

  back() {
    this.addProduct = false;
    this.product = null;
  }

}
