import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css'],
})
export class Ejemplo1Component implements OnInit {
  name = 'cris';
  constructor() {}

  ngOnInit(): void {}

  onKeyup(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
    this.name = element.value;
  }
}
