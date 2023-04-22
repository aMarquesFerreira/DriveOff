import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car/car.service';
import { Car } from '../shared/models/Car';
import { ActivatedRoute, PreloadAllModules } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cars: Car[] = [];
  constructor(private carService:CarService, private route:ActivatedRoute) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      
      if(params.searchTerm)
        this.cars = this.carService.getAllCarsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.cars = this.carService.getAllCarsByTag(params.tag);
      else
        this.cars = this.carService.getAll();

        console.log("lista: "+this.cars);

    })

    //this.cars = this.carService.getAll(); 
  }

  

  markFavourite(car: Car): void {
    console.log("before: "+car.favorite);
    car.favorite = !car.favorite;
    console.log("after: "+car.favorite);
  }

  onFavoriteClicked(event: MouseEvent, car: Car) {
    event.stopPropagation(); // prevent the event from propagating to the <a> tag
    this.markFavourite(car); // call your markFavourite function to toggle the favorite status
  }



}
