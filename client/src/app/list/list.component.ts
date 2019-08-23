import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pops: any = [];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    let observable = this._http.getAll();
    observable.subscribe(data => {
      console.log(data);
      this.pops = data;
    })
  }

  removePop(_id) {
    let observable = this._http.delete(_id);
    observable.subscribe(data => {
      this.ngOnInit()
    })
  }

}
