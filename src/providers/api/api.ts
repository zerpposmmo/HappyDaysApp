import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ENV} from "../../envrionments/environment";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get(route) {
    return new Promise(resolve => {
      this.http.get(ENV.apiUrl + route).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
