import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { InvestList } from './investList'

@Injectable()
export class InvestListService {

  private heroesUrl = 'app/investLists' //test
  //private heroesUrl = '/api/test'  //node

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getHeroes(): Promise<InvestList[]> {
    return this.http.get(this.heroesUrl)
    		   .toPromise()
    		   .then(response => response.json().data as InvestList[])
    		   .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }



}




