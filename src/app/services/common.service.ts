import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
@Injectable()
export class CommonService {
  apiURL = "http://localhost:3000/hosts";
  constructor(private http:Http) {}
  // will get all the hosts in the list
  gethosts(){
    return this.http.get(this.apiURL);
  }
  // will create a new host in json file
  newhost(hostdata){
    // let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.apiURL,hostdata);
  }
  // will get host based on id
  gethost(){

  }
  // will update host details
  updatehost(){

  }
  // delete individual interface
  deleteinterface(){

  }
  // delete individual host
  deletehost(){

  }
  // updated interface with host
  updateinterface(){

  }
}
