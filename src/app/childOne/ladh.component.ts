import { Component, OnInit } from '@angular/core';

//Services
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector : 'ladh',
	template : `<h2>Heading from ladh Component</h2>
				<p>Childone Id : {{id}}</p>
				<button (click)='goBack()'>Go Back</button>`,
})

export class LadhComponent implements OnInit{
	public id:number;
	constructor(private route:ActivatedRoute, private router : Router){}
	ngOnInit(){
		console.log(this.route);
		//this.id = this.route.snapshot.params['id'];
		this.route.params.subscribe((params : Params)=>{
			this.id = parseInt(params['id']);
		});
	}

	goBack(){
		let selectedId = this.id?this.id:null;
		this.router.navigate(['/childone',{id: selectedId}])
	}
}