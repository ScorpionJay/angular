import { Component } from '@angular/core'

@Component({
		selector:'my-nav',
		inputs: ['active'],
		template:`
			<nav>
				<a routerLink='/home' [ngClass]="{active: active=='home'}">
					<span class='fa fa-home'></span><br>
					<span>精选</span>	
				</a>
				<a routerLink='/invest' [ngClass]="{active: active=='invest'}">
					<span class='fa fa-rmb'></span><br>
					<span>投资</span>			
				</a>
				<a routerLink='/assets' [ngClass]="{active: active=='assets'}">
					<span class='fa fa-search'></span><br>
					<span>资产</span>
				</a>
				<a routerLink='/me' [ngClass]="{active: active=='me'}">
					<span class='fa fa-user'></span><br>
					<span>我</span>
				</a>
			</nav>
		`,
		styles:[`
			nav {
				
			    bottom: 0;
			    background-color: #999;
			    width:100%;
			    font-size: 0;
			    border-top:1px #E3E3E3 solid;
			}
			nav a{
				color: #999;
				background-color: #fff;
				width: 25%;
				display: inline-block;
				text-align: center;
				text-decoration: none;
				line-height: 20px;
				font-size: 14px;
			}
			nav a.active {
				color:#5C6BC2;
			}
			.fa {
				font-size:25px;
				padding-top:4px;
			} 
			`]
		
})

export class NavComponent {}