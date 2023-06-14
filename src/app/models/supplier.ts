import { Product } from "./product";

export class Supplier {
  id: number;
  nome: string;
  telefone: number;
  email: string;
  cnpj: number;
  endereço: string;
  cidade: string;
  estado: string;
  cep: number;
  site: string;
  produtos: Product[];
}
