import { Component } from '@angular/core';

//import { LadhComponent } from './childOne/ladh.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  				<nav>
  					<a routerLink='/childone' routerLinkActive='active'>Childone</a>
  				</nav>
  				<router-outlet></router-outlet>`,
})

export class AppComponent  { name = 'Angular'; }
