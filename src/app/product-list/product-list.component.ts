import { Component, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products';

//Composent qui Affiche la liste des produits disponibles à l'achat

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  // est appelé par le bouton share via le html
  share() {
    window.alert('The product has been shared!');
  }

  // Quand le eventEmitter emet une notification, cette méthode est lancée
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
