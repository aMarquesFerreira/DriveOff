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
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'gasóleo',
        cc: 120,
        year: 2018,// June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/carro2.svg',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
      {
        id: 2,
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'string',
        cc: 120,
        year: 2018, // June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/smart2.png',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
      {
        id: 3,
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'string',
        cc: 120,
        year: 2018, // June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
      {
        id: 4,
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'string',
        cc: 120,
        year: 2018, // June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
      {
        id: 5,
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'string',
        cc: 120,
        year: 2018, // June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
      {
        id: 6,
        name: 'Smart',
        kms: 40000,
        type_of_fuel: 'string',
        cc: 120,
        year: 2018, // June 30, 2018
        trunk_liters: 250,
        color: 'blue',
        brand: 'Mercedes-Benz',
        description: 'This is a great car for city driving.',
        price: 15000,
        price_per_month: 250,
        favorite: false,
        imageUrl: '/assets/images/cars/red-sports-car-png-1.png',
        origins: ['italy'],
        tags: ['FastFood', 'Pizza', 'Lunch'],
        showDetails: false,
      },
    ];
  }
}