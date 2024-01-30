import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css'],
})
export class Ejemplo2Component implements OnInit {
  names: string[] = ['cris', 'dfdsfds', 'd'];
  constructor() {}

  ngOnInit(): void {}
}
