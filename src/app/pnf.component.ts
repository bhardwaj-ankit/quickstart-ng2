import { Component } from '@angular/core';

@Component({
	template : `<h2>Page Not Found. SOrry!!</h2>
				<label>Input 1</label>
				<input type='text' #ptext (keyup)='0'>
				{{chdata}}
				<br><br>
				<page-not (cevt)="chdata=$event" [pinput]="ptext.value"></page-not>
				`
})
export class PnfComponent {
	public chdata:string;
}