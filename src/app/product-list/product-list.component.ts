import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  p: number = 1;
  productList: Product[] = [];
  public productForm: FormGroup;
  addProduct: boolean;
  public product: Product;
  public teste: string;

  constructor(private form: FormBuilder, private productService: ProductService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
        next: response => {
            this.productList = response;
            console.log(this.productList);
        },
        error: () => {
            "ERRO"
        },
    });
}

  buildForm() {
    this.productForm = this.form.group({
      nome: ['', Validators.required],
      descricao: [''],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      idCategoria: ['', Validators.required]
    });
  }

  createNewProduct(): void {
    console.log(this.productForm.value);
    this.productService.createProduct(this.productForm.value).subscribe({
        next: () => {
            this.loadProducts();
        },
        error: () => {
            "ERRO"
        },
    });
}

  stockCreate() {
    // console.log(this.productForm.value)
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
