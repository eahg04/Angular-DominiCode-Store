import { Product } from './../../pages/products/interfaces/product.interfaces';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  products: Product[] = [];

  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  updateCart(product: Product): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  private addToCart(product: Product): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

  private calcTotal(): void {
    const total = this.products.reduce((acc, prod) => (acc += prod.price), 0);
    this.totalSubject.next(total);
  }

  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }
}
