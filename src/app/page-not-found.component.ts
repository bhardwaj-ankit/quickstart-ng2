import { Component,EventEmitter } from '@angular/core';

@Component({
	selector : 'page-not',
	template : `<h1>Page Not Found</h1>
				<label>Input 2</label>
				<input type='text' #ctext (keyup)="onChange(ctext.value)">
				{{pinput}}`,
	inputs : ['pinput'],
	outputs : ['cevt']
})
export class PageNotFoundComponent{
	public pinput:string;
	public cevt = new EventEmitter<string>();
	onChange(param:string){
		this.cevt.emit(param);
	}
}