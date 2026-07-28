export interface Book {

  id: number;

  title: string;

  author: string;

  category: string;

  description: string;

  price: number;

  stock: number;

  image: string;

  status: 'available' | 'out-of-stock';

}