import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../models/starship.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Starship | undefined;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.starshipService.getStarship(productId).subscribe((product: Starship) => {
        this.product = product;
      });
    }
  }

  addToCart(product: Starship) {
    // Implement add to cart logic here
  }
}
