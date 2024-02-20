export interface IProduct {
  id: string;
  brand: string;
  description: string;
  priceO: number;
  priceR?: number;
  url: string;
  images: string[];
  sizes: string[];
}
