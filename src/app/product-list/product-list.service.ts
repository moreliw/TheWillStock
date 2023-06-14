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

  getAllMockProducts() {
    const products = [
      {
        id: 1,
        nome: 'Camisa',
        descricao: 'Camisa de gola polo lacoste tamanho M',
        precoCusto: 4,
        precoVenda: 10,
        quantidade: 20,
        category: {
          id: 1,
          nome: 'Vestuário',
          descricao: 'Ítens de materiais da in...'
        }
      },
      {
        id: 2,
        nome: 'Bermuda',
        descricao: 'Bermuda Reserva tamanho 42',
        precoCusto: 5,
        precoVenda: 15,
        quantidade: 10,
        category: {
          id: 1,
          nome: 'Vestuário',
          descricao: 'Ítens de materiais da in...'
        }
      },
      {
        id: 3,
        nome: 'Camisas',
        descricao: 'Vestuário',
        precoCusto: 4,
        precoVenda: 10,
        quantidade: 20,
        category: {
          id: 1,
          nome: 'Vestuário',
          descricao: 'Ítens de materiais da in...'
        }
      },
    ]

    return products;
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }
}
