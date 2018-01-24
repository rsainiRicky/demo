import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class CommonService {

  constructor(private http:Http) { }
  getdata(){
    return this.http.get('../assets/data.json');
  }
}
