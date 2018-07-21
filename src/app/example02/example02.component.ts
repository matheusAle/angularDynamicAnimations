import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.css'],
  animations: [
    trigger('nodes', [
      transition('* => change', [
        animate(500, keyframes([
          style({ offset: 0, 'background-color': 'black', 'transform': '{{transform0}}' }),
          style({ offset: .5, 'background-color': '{{color}}', 'transform': '{{transform1}}' }),
          style({ offset: 1, 'background-color': 'black', 'transform': '{{transform0}}' }),
        ]))
      ], { params: { color: '', transform0: '', transform1: '' } })
    ])
  ]
})
export class Example02Component {
  
  public nodes = [
    { value: '', params: { color: 'green', transform1: 'rotate(-20deg)', transform0: 'rotate(0)'}},
    { value: '', params: { color: 'tomato', transform1: 'scale(.9)', transform0: 'scale(1)'}},
    { value: '', params: { color: 'white', transform1: 'translateX(20px)', transform0: 'translateX(0)'}},
    { value: '', params: { color: 'blue', transform1: 'translateY(20px)', transform0: 'translateY(0)'}},
  ];
  
  toggle(i) {
    this.nodes[i] = { value: 'change', params: this.nodes[i].params }
  }

}
