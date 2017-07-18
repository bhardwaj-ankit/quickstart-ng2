import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

//Services
import { ChildoneService } from './childone.service'

@Component({
	selector : 'child-one',
	template : `<h2>Heading from Childone Component</h2>
				<h3 [class.myc]='con'>{{myvar}}</h3>
				<h3 [class.red]='con'>{{errorMsg}}</h3>
				<img [src]='imageLink'>
				<h4>List of Childone Data</h4>
				<p (click)='onClick(childone)' [class.lvisited]='childone.id===lastVisitedId' *ngFor="let childone of childonedata">S.No. : {{childone.id}} Name : {{childone.name}}</p>`,
	styles : [`.myc{color:green}
				.red{color:red}	
				.lvisited{color:blue}`],
	providers : [ChildoneService],
})

export class ChildoneComponent implements OnInit {
	public myvar = "This is H3 of childone";
	public con = true;
	public lastVisitedId:number;
	public imageLink = 'http://lorempixel.com/400/200';
	childonedata  = new Array();
	errorMsg:String;

	constructor(private chiloneservice : ChildoneService, private router : Router, private route : ActivatedRoute){}
	ngOnInit(){
		this.chiloneservice.getChildoneData()
				.subscribe(res => this.childonedata = res,
					resError => this.errorMsg = resError);
		this.route.params.subscribe((params : Params)=> {
			let id = parseInt(params['id']);
			this.lastVisitedId = id;
		})

	}

	onClick(childone:){
		this.router.navigate(['/childone',childone.id]);
	}
}