import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getAll() {
  	return this._httpClient.get("/pops");
  }

  getOnePop(_id) {
  	return this._httpClient.get(`/pops/${_id}`);
  }

  createPop(fpop) {
  	return this._httpClient.post("/pops", fpop);
  }

  delete(_id) {
  	return this._httpClient.delete(`/pops/${_id}`);
  }

  updatePop(_id, fpop) {
  	return this._httpClient.put(`/pops/${_id}`, fpop);
  }
}
