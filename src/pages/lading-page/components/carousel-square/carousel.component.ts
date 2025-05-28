import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel-square',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselSquareComponent {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  items = Array(10).fill(0);

  scrollCarousel(direction: number) {
    const scrollAmount = 150;
    this.carousel.nativeElement.scrollBy({ 
      left: direction * scrollAmount, 
      behavior: 'smooth' 
    });
  }
}
