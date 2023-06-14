import { Component } from '@angular/core';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent {
  p: number = 1;
  supplierListMock: Supplier[] = [
    {
      id: 1,
      nome: 'Seu Zé',
      telefone: 28999552024,
      email: 'asdasd@dsdsadas',
      cnpj: 65611160000112,
      endereço: 'rua teste',
      cidade: 'Rio Novo do Sul',
      estado: 'ES',
      cep: 29290000,
      site: 'www.sitefornecedor.com.br',
      produtos: [
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
        }
      ]
    },
    {
      id: 1,
      nome: 'Seu Zé',
      telefone: 28999552024,
      email: 'asdasd@dsdsadas',
      cnpj: 65611160000112,
      endereço: 'rua teste',
      cidade: 'Rio Novo do Sul',
      estado: 'ES',
      cep: 29290000,
      site: 'www.sitefornecedor.com.br',
      produtos: [
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
        }
      ]
    },
  ];
}
