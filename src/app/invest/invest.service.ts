import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invest } from './invest'

@Injectable()
export class InvestService {

  private heroesUrl = '/api/inverst'
    //private heroesUrl = 'app/investLists' //test
  //private heroesUrl = '/api/test'  //node
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getHeroes(): Promise<Invest[]> {

    //console.log('test',this.http.get(this.heroesUrl))
    //console.log('test2',this.http.get(this.heroesUrl).toPromise())
    //console.log('test3',this.http.get(this.heroesUrl).toPromise().then(response => console.log(response.json())))
    return this.http.get(this.heroesUrl)
    		   .toPromise()
    		   .then(response => response.json().data as Invest[])
    		   .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }



}

