import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acordion',
  imports: [CommonModule],
  templateUrl: './acordion.component.html',
  styleUrl: './acordion.component.scss'
})
export class AcordionComponent {

  items = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat lobortis dui vitae laoreet. Suspendisse turpis ante, bibendum vel semper sit amet, vehicula in ligula. '
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Conteúdo do segundo item.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Conteúdo do terceiro item.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Conteúdo do quarto item.'
    }
  ];

  activeIndex: number | null = 0;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
