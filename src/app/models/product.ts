import { Category } from "./category";

export class Product {
  id: number;
  nome: string;
  descricao: string;
  precoCusto: number;
  precoVenda: number;
  quantidade: number;
  category: Category;
}
