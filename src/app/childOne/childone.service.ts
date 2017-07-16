import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ChildoneService {
	public urlForChildOneData:string  = '../../webserver/childondata.json'; 
	constructor(public _http : Http){}
	getChildoneData(){
		return this._http.get(this.urlForChildOneData)
				.map((response:Response) => response.json())
				.catch(this.errorhandler);
	}
	errorhandler(error:Response){
		return Observable.throw(error || "Server Error");
	}
}