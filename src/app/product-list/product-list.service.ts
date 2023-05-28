import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl = `${environment.mainUrl}/api/Product`;
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }
}
