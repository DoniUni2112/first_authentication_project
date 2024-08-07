import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreService } from './services/store.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    ProductCardComponent,
    NgFor,
    NgIf,
    ProductCartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'authentication';

  constructor(
    public authService: AuthService,
    public storeService: StoreService,
  ) {}
}
