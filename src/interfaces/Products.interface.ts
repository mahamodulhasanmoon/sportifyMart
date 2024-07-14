export interface ProductProps {
    brand: string;
    category: string;
    description: string;
    id: string;
    imgUrls: string[];
    name: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    __v: number;
    _id: string;
  }

 export  interface ICart {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
}