import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThreeInterfaceComponent } from '../three-interface/three-interface.component';
import { HomeImagesComponent } from '../home-images/home-images.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ThreeInterfaceComponent, HomeImagesComponent],
  template: `
    <div class="col-auto">
      <div class="row-auto">
        <app-navbar></app-navbar>
      </div>
      <div class="mt-20">
        <app-home-images />
      </div>
      <!-- <app-three-interface/> -->
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
