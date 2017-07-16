//Importing Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importing Components
import { ChildoneComponent } from './childOne/childone.component';
import { LadhComponent } from './childOne/ladh.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
import { PnfComponent } from './pnf.component';

const route: Routes = [
		{ 'path' : '', redirectTo : 'a', pathMatch : 'full'},
		{ 'path' : 'childone', component : ChildoneComponent},
		{ 'path' : 'childone/:id', component : LadhComponent},
		{ 'path' : 'pnf', component : PnfComponent},
		{ 'path' : 'a', component : PageComponent, children : [
				{ 'path' : '', component : PageComponent},
				{ 'path' : 'aaa', component : LadhComponent}
			]
		},
		{ 'path' : '**', component : PageNotFoundComponent}
	]

@NgModule({
	imports : [
		RouterModule.forRoot(route)
	],
	exports : [
		RouterModule
	]
})
export class AppRoutingModule{}
export const RoutingComponents = [ChildoneComponent,LadhComponent,PageComponent,PnfComponent,PageNotFoundComponent]
