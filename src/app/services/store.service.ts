import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  products: Product[] = [
    {
      id: 1,
      name: 'MSI GeForce RTX 3060 Ventus 2X OC 12G GDDR6',
      price: '7.500.000',
      description: 'This is a description for product 1',
      inStock: 10,
      imageUrl: './assets/rtx_3060.webp',
    },
    {
      id: 2,
      name: 'ASUS ROG Strix GeForce RTX 4060 OC Edition 8GB GDDR6',
      price: '15.500.000',
      description: 'This is a description for product 2',
      inStock: 20,
      imageUrl: './assets/rtx_4060.webp',
    },
    {
      id: 3,
      name: ' GIGABYTE GeForce RTX 4070 AERO OC 12GB GDDR6',
      price: '19.290.000',
      description: 'This is a description for product 3',
      inStock: 30,
      imageUrl: './assets/rtx_4070_aero.webp',
    },
    {
      id: 4,
      name: 'AORUS GeForce RTX™ 4090 MASTER 24G',
      price: '54.999.000',
      description: 'This is a description for product 4',
      inStock: 40,
      imageUrl: './assets/rtx_4090_aorus.webp',
    },
    {
      id: 5,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 5',
      inStock: 50,
      imageUrl: './assets/rtx_4090.png',
    },
    {
      id: 6,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 6',
      inStock: 60,
      imageUrl: './assets/rtx_4090.png',
    },
    {
      id: 7,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 7',
      inStock: 70,
      imageUrl: './assets/rtx_4090.png',
    },
    {
      id: 8,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 8',
      inStock: 80,
      imageUrl: './assets/rtx_4090.png',
    },
    {
      id: 9,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 9',
      inStock: 90,
      imageUrl: './assets/rtx_4090.png',
    },
    {
      id: 10,
      name: 'RTX 4090',
      price: '15.500.000',
      description: 'This is a description for product 10',
      inStock: 100,
      imageUrl: './assets/rtx_4090.png',
    },
  ];

  cart: any[] = [];

  // addToCart(item: any) {
  //   let index = this.cart.findIndex(
  //     (product): boolean => product.id == item.id,
  //   );
  //   let indexProduct = this.products.findIndex(
  //     (product): boolean => product.id == item.id,
  //   );
  //   if (index == -1) {
  //     this.cart.push({ ...item, quantity: 1 });
  //   } else {
  //     this.cart[index].quantity += 1;
  //   }
  //   this.products[indexProduct].inStock -= 1;
  // }

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find(
        (p: any): boolean => p.id === product.id,
      );
      let productInStock = this.products.find(
        (p: any): boolean => p.id === product.id,
      );
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
      } else {
        this.cart.push({ ...product, quantity: 1 });
        productInStock!.inStock--;
      }
    } else {
      alert('Please login to add to cart');
    }
  }

  removeFromCart(index: number) {
    // Xóa sp khỏi giỏ hàng
    const cartItem = this.cart[index]; // Lấy sp trong giỏ hàng

    if (cartItem.quantity > 1) {
      // Nếu số lượng > 1
      cartItem.quantity -= 1; // Giảm số lượng đi 1
    } else {
      // Nếu số lượng = 1
      this.cart.splice(index, 1); // Xóa sp đó khỏi giỏ hàng
    }

    // Tìm sp trong kho tương ứng với sp trong giỏ hàng
    const product = this.products.find((product) => product.id === cartItem.id);

    if (product) {
      product.inStock += 1; // Tăng số lượng trong kho
    }
  }
  
  checkOut() {
    // Thanh toán
    // Check if the cart is empty
    if (this.cart.length === 0) {
      alert('Không có sản phẩm để thanh toán');
      return; // Exit the function early
    }

    this.cart = []; // Xóa hết sp trong giỏ hàng
    this.products.forEach((element) => {
      // Duyệt qua từng phần tử trong kho
    });
    alert('Thank for purchase our product <3'); // Thông báo thanh toán thành công
  }
}
