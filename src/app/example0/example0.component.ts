import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-example0',
  templateUrl: './example0.component.html',
  styleUrls: ['./example0.component.css'],
  animations: [
    trigger('ani', [
      state(':enter', style({ color: '{{color}}' }), { params: { color: '' } }),
      transition('* <=> *', animate(1500))
    ])
  ]
})
export class Example0Component { }
