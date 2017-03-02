import { Component,OnInit } from '@angular/core'

import { InvestList } from './investList';
import { InvestListService } from './investList.service';

import { Router ,ActivatedRoute, Params} from '@angular/router'

@Component({
		selector:'my-invest',
		templateUrl:'./investList.template.html',
		styleUrls:['./investList.style.css']
})

export class InvestListComponent  implements OnInit{

	title:string
	investList: InvestList
	investLists:InvestList[] = []

	constructor(
		private homeService: InvestListService,
		private router: Router,
		private route: ActivatedRoute) {}

	ngOnInit(): void {

		this.route.params.forEach((params: Params) => {
		    let type = params['type'];
		    this.title = type === 'uub' ? "产品1" : "产品2";
		   this.homeService.getHeroes()
						.then(
							investLists => {this.investLists = investLists//.slice(1,5)
							console.log(investLists)
						}
						)
		});


		
	}

	goBack(): void {
	    window.history.back();
	}

	// gotoDetail(invest:Invest):void {
	// 	let link = ['/invest',invest.type]
	// 	this.router.navigate(link)
	// }
}