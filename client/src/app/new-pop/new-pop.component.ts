import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pop',
  templateUrl: './new-pop.component.html',
  styleUrls: ['./new-pop.component.css']
})
export class NewPopComponent implements OnInit {

  fpop : any = {};
  errors : any = {};

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addPop() {
  	console.log(this.fpop);
  	let observable = this._http.createPop(this.fpop);
  	observable.subscribe(data => {
  	  if(data['errors']){
  	    this.errors = data['errors'];
  	  } else {
  	    this._router.navigate(["/"]);
  	  }
  	});
  }

}
