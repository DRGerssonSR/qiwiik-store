export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'protein' | 'energy' | 'recovery' | 'snack';
  ingredients: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  inStock: boolean;
}
