import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home-landing2',
  templateUrl: './home-landing2.component.html',
  styleUrls: ['./home-landing2.component.css']
})
export class HomeLanding2Component {

  @ViewChild('image', { static: false }) image!: ElementRef | undefined; // Reference to the image element in the template

  constructor(private renderer: Renderer2) {}

  onMouseEnter() {
    console.log("entered the code");
    if (this.image) {
      console.log(this.image);
      // Animate the image when mouse enters
      this.renderer.setStyle(this.image.nativeElement, 'transform', 'rotate(360deg)');
    }
  }

  onMouseLeave() {
    if (this.image) {
      // Animate the image when mouse leaves
      this.renderer.setStyle(this.image.nativeElement, 'transform', 'rotate(0deg)');
    }
  }

}
