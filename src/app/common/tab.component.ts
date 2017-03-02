import { Component,OnInit} from '@angular/core'

import { Location }   from '@angular/common';

@Component({
		selector:'my-tab',
		inputs: ['left','name','right','rightLink'],
		template:`
			<div class="top">
				<div>
					<div  *ngIf='left' (click)='goBack()'><</div>
				</div>
				<div>{{name}}</div>
				<div>
					<a routerLink='{{rightLink}}' >{{right}}</a>
				</div>
			</div>
		`,
		styles:[`
			.top {
					background-color: rgb(255, 116, 96);
					color: #fff;
					font-size: 20px;
					top:0;
					height: 3rem;
					display: flex;
					justify-content: space-between;;
					align-items: center;
					padding:0 .9rem;
				}
			.top a {
				color: #fff;
				text-decoration: none;
			}
			`]
		
})

export class TabComponent implements OnInit {
	
	constructor(
	    private location: Location
	) {}

	ngOnInit(): void {
	   
	}


	goBack(): void {
	    this.location.back();
	}
}