import { Component } from '@angular/core';

@Component({
	template : `<h2>Page Not Found Sorry!</h2>
				<h3>USER DATA</h3>
				<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">
					<div class='formGroup'>
						<label>Name</label>
						<input type="text" class="form-control" name="Name" ngModel>
					</div>
					<div class='formGroup' ngModelGroup="address">
						<label>Add</label>
						<input type="text" class="form-control" name="Add" ngModel>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
				`
})
export class PageComponent{
	onSubmit(param:any){
		console.log(param)
	}
}