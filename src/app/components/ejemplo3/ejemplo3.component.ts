import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css'],
})
export class Ejemplo3Component implements OnInit {
  products: IProduct[] = [
    {
      title: 'GUANTE ALGODON PALMA LATEX BICOLOR TALLA 10',
      sku: 'EPPMAN0016',
      image: 'https://images.implementos.cl/img/600/EPPMAN0016-1.jpg',
      price: 990,
      stock: [
        {
          store: 'ARICA',
          quantity: 10,
        },
        {
          store: 'LINARES',
          quantity: 10,
        },
      ],
    },
    {
      title: 'PAÑO MICROFIBRA MULTIPROPOSITO 3 UNIDADES',
      sku: 'LIMCAR0101',
      image: 'https://images.implementos.cl/img/600/LIMCAR0101-1.jpg',
      price: 1990,
      stock: [
        {
          store: 'IQUIQUE',
          quantity: 1,
        },
        {
          store: 'SAN BERNARDO',
          quantity: 20,
        },
      ],
    },
    {
      title: 'ENCENDEDOR TRANSPARENTE',
      sku: 'RONPAR0001',
      image: 'https://images.implementos.cl/img/600/RONPAR0001-1.jpg',
      price: 490,
      stock: [
        {
          store: 'ANTOFAGASTA',
          quantity: 8,
        },
        {
          store: 'CASTRO',
          quantity: 5,
        },
      ],
    },
  ];
  cart: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
