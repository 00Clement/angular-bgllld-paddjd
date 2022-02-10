import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products'; // utile afin de recevoir des données produits

// Indique que la classe ProductAlertsComponent est un composent
@Component({
  selector: 'app-product-alerts', // commence par convention sur app
  templateUrl: './product-alerts.component.html', // fait référence au code html du composant
  styleUrls: ['./product-alerts.component.css'], // fait référence au code CSS du composant
})
// classe qui gère les fonctionnalités du composant
export class ProductAlertsComponent implements OnInit {

  // Le décorateur @Input() indique que la valeur de la propriété est transmise par le parent du composant, ProductListComponent
  @Input() product!: Product;

  // Output est une instance de EventEmitter. Cet attribut permet à ProductAlertsComponent d'émettre un événement lorsque la valeur de la propriété notify change.
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
