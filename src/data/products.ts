import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Qiwiik Protein Bar - Chocolate',
    description: 'Barra energética rica en proteínas con sabor a chocolate negro. Perfecta para después del entrenamiento.',
    price: 3.99,
    image: '/api/placeholder/300/200',
    category: 'protein',
    ingredients: ['Proteína de suero', 'Chocolate negro', 'Avena', 'Miel', 'Almendras'],
    nutritionalInfo: {
      calories: 250,
      protein: 20,
      carbs: 15,
      fat: 8
    },
    inStock: true
  },
  {
    id: '2',
    name: 'Qiwiik Energy Boost - Berry',
    description: 'Barra energética con frutos rojos para un impulso de energía natural.',
    price: 2.99,
    image: '/api/placeholder/300/200',
    category: 'energy',
    ingredients: ['Dátiles', 'Arándanos', 'Nueces', 'Semillas de chía', 'Coco'],
    nutritionalInfo: {
      calories: 180,
      protein: 5,
      carbs: 25,
      fat: 6
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Qiwiik Recovery Bar - Vanilla',
    description: 'Barra de recuperación con sabor a vainilla para reponer energías después del ejercicio.',
    price: 4.49,
    image: '/api/placeholder/300/200',
    category: 'recovery',
    ingredients: ['Proteína de caseína', 'Vainilla', 'Plátano', 'Canela', 'Nueces de macadamia'],
    nutritionalInfo: {
      calories: 320,
      protein: 25,
      carbs: 20,
      fat: 12
    },
    inStock: true
  },
  {
    id: '4',
    name: 'Qiwiik Snack Bar - Peanut Butter',
    description: 'Deliciosa barra de mantequilla de maní para cualquier momento del día.',
    price: 2.49,
    image: '/api/placeholder/300/200',
    category: 'snack',
    ingredients: ['Mantequilla de maní', 'Miel', 'Avena', 'Semillas de girasol', 'Cacao'],
    nutritionalInfo: {
      calories: 200,
      protein: 8,
      carbs: 18,
      fat: 10
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Qiwiik Protein Bar - Cookies & Cream',
    description: 'Barra proteica con el clásico sabor cookies & cream.',
    price: 3.99,
    image: '/api/placeholder/300/200',
    category: 'protein',
    ingredients: ['Proteína de suero', 'Galletas', 'Crema', 'Avena', 'Coco'],
    nutritionalInfo: {
      calories: 260,
      protein: 22,
      carbs: 16,
      fat: 9
    },
    inStock: false
  },
  {
    id: '6',
    name: 'Qiwiik Energy Boost - Tropical',
    description: 'Barra energética con sabores tropicales para mantenerte activo.',
    price: 2.99,
    image: '/api/placeholder/300/200',
    category: 'energy',
    ingredients: ['Mango', 'Piña', 'Coco', 'Dátiles', 'Nueces de Brasil'],
    nutritionalInfo: {
      calories: 190,
      protein: 6,
      carbs: 28,
      fat: 5
    },
    inStock: true
  }
];
