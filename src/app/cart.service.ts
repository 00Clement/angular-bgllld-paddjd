import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

// Dans Angular, un service est une instance d'une classe que vous pouvez mettre à la disposition de n'importe quelle partie de votre application à l'aide du système d'injection de dépendances d'Angular.

// un sevice est un modèle de conception et un mécanisme pour créer et fournir certaines parties d'une application (dépendances) à d'autres parties d'une application qui en ont besoin.

// Ce service est utile la gestion du panier d'achat. items est justement ce panier d'achat.

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // nomAttribut : type = valeur
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
