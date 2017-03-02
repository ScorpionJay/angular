import { Component,OnInit } from '@angular/core'

import { Invest } from './invest';
import { InvestService } from './invest.service';

import { Router } from '@angular/router'

@Component({
		selector:'my-invest',
		templateUrl:'./invest.template.html',
		styleUrls:['./invest.style.css']
})

export class InvestComponent  implements OnInit{

	invest: Invest
	invests:Invest[] = []

	constructor(
		private homeService: InvestService,
		private router: Router) {}

	ngOnInit(): void {
		this.homeService.getHeroes()
						.then(
							invests => {this.invests = invests//.slice(1,5)
							console.log(invests)
						}
						)
	}

	gotoDetail(invest:Invest):void {

		//根据业务逻辑 需要判断

		let link = ['/invest',invest.type]
		this.router.navigate(link)
	}
}