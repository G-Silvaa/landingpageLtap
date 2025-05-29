import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel-square',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselSquareComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  items = Array(10).fill(0); // Array de itens do carousel
  itemWidth: number = 0; // Largura de cada item

  ngAfterViewInit() {
    // Calcula a largura de cada item após o carregamento do componente
    const firstItem = this.carousel.nativeElement.querySelector('.item') as HTMLElement;
    if (firstItem) {
      this.itemWidth = firstItem.offsetWidth + 30; // Inclui o gap entre os itens
    }
  }

  scrollCarousel(direction: number) {
    if (this.carousel && this.carousel.nativeElement) {
      const scrollPosition = this.carousel.nativeElement.scrollLeft;
      const newScrollPosition = scrollPosition + direction * this.itemWidth;

      this.carousel.nativeElement.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  }
}