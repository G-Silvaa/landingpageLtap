import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel-content',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselContentComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  items = Array(10).fill(0); // Array de quadrados grandes
  itemWidth: number = 0; // Largura de cada quadrado (incluindo o gap)

  ngAfterViewInit() {
    // Calcula a largura de cada item após o carregamento do componente
    const firstItem = this.carousel.nativeElement.querySelector('.item') as HTMLElement;
    if (firstItem) {
      const style = window.getComputedStyle(firstItem);
      const marginRight = parseFloat(style.marginRight || '0');
      this.itemWidth = firstItem.offsetWidth + marginRight; // Inclui o gap entre os itens
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