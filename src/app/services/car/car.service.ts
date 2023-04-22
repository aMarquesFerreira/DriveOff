import { Injectable } from '@angular/core';
import { Car } from '../../shared/models/Car';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() { }

  getCarById(id: number): Car{
    return this.getAll().find(car => car.id == id)!;
  }
  
  getAllCarsBySearchTerm(searchTerm:string) :Car[]{
    return  this.getAll().filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllCarsByTag(tag: string): Car[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(car => car.tags?.includes(tag));
  }

  getAll(): Car[] {
    return [
      {
        id: 1,
        name: 'Mercedes',
        cookTime: '100 CV',
        price: 50000,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Honda',
        price: 30000,
        cookTime: '100 CV',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'BMW',
        price: 50000,
        cookTime: '100 CV',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Audi',
        price: 50000,
        cookTime: '100 CV',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Ferrari',
        price: 50000,
        cookTime: '100 CV',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 50000,
        cookTime: '100 CV',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}