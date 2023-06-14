import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from './product-list.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent {
  p: number = 1;
  productList: Product[] = [];
  public productForm: FormGroup;
  addProduct: boolean;
  public product: Product;
  public teste: string;
  public productListMock: Product[] = [];

  constructor(
    private form: FormBuilder,
    private productService: ProductService,
    private modalService: NgbModal
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.loadProductsMock();
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

  loadProductsMock(): void {
    this.productListMock = this.productService.getAllMockProducts();
  }

  buildForm() {
    this.productForm = this.form.group({
      nome: ['', Validators.required],
      descricao: [''],
      precoCusto: ['', Validators.required],
      precoVenda: ['', Validators.required],
      quantidade: ['', Validators.required],
      idCategoria: ['', Validators.required]
    });
  }

  createNewProduct(): void {
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

  openModal() {
    this.modalService.open(ProductFormComponent);
  }


}
