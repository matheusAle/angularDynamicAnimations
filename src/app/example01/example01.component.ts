import { Component } from '@angular/core';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css'],
  animations: [
    trigger('node', [
      transition(':enter', [
        style({ 'transform': 'scale(0)' }),
        animate('500ms {{delay}}ms ease-out', keyframes([
          style({ offset: .6, 'transform': 'scale(1.2)'}),
          style({ offset: .85, 'transform': 'scale(.9)'}),
          style({ offset: 1, 'transform': 'scale(1)'}),
        ]))
      ], { params: { delay: 1 } })
    ])
  ]
})
export class Example01Component {


}
