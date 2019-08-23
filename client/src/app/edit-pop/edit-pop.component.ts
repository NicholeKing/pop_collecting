import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pop',
  templateUrl: './edit-pop.component.html',
  styleUrls: ['./edit-pop.component.css']
})
export class EditPopComponent implements OnInit {

  fpop : any = {}
  errors : any = {};

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.params.subscribe(params => {
  	  let observable = this._http.getOnePop(params._id);
  	  observable.subscribe(data => {
  	  	this.fpop = data;
  	  })
  	})
  }

  updatePop() {
  	let observable = this._http.updatePop(this.fpop._id, this.fpop);
  	observable.subscribe(data => {
  	  if(data['errors']) {
  	  	this.errors = data['errors'];
  	  } else {
  	  	  this._router.navigate(['/']);
  	  }
  	});
  }

}
