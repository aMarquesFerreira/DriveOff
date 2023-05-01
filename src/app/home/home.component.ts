import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car/car.service';
import { Car } from '../shared/models/Car';
import { ActivatedRoute, PreloadAllModules, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cars: Car[] = [];

  constructor(private carService:CarService, private route:ActivatedRoute,
    private cartService: CartService,
    private router: Router) {}

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

  //Math = Math; // add this line

  markFavourite(car: Car): void {
    console.log("before: "+car.favorite);
    car.favorite = !car.favorite;
    console.log("after: "+car.favorite);
  }

  showFooter() {
    var footer = document.querySelector('.product-item-footer') as HTMLElement;;
    if (footer !== null) { // add a null check
      footer.style.display = (footer.style.display === 'none') ? 'grid' : 'none';
    }
  }

  markSeeFooter(car: Car): void{
    console.log("see details clicked")
    car.showDetails = !car.showDetails;
    const plusIcon = document.querySelector('.plus-icon') as HTMLImageElement;
    plusIcon.classList.toggle('rotate');
    this.showFooter(); // call the JavaScript function to show the footer
  }


  onFavoriteClicked(event: MouseEvent, car: Car) {
    event.stopPropagation(); // prevent the event from propagating to the <a> tag
    this.markFavourite(car); // call your markFavourite function to toggle the favorite status
  }

  addToCart(car: Car){
    this.cartService.addToCart(car);
  }


}
