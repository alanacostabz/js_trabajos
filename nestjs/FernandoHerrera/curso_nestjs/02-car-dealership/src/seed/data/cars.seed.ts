import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'ferrari',
    model: 'cr7',
  },
  {
    id: uuid(),
    brand: 'honda',
    model: 'civic',
  },
];
