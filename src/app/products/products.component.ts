import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  module1Icons = ['fa-stop', 'fa-car-burst', 'fa-route', 'fa-arrows-left-right', 'fa-traffic-light'];
  module2Icons = ['fa-face-tired', 'fa-mobile-screen', 'fa-moon', 'fa-smoking', 'fa-user-shield'];
  coreGeoIcons = ['fa-location-dot', 'fa-gauge-high', 'fa-gas-pump', 'fa-clock', 'fa-route', 'fa-map-pin', 'fa-database'];
  coreScoringIcons = ['fa-user-check', 'fa-chart-line', 'fa-ranking-star', 'fa-comments'];
  coreCabinIcons = ['fa-box', 'fa-user', 'fa-video', 'fa-clipboard-check'];
}
