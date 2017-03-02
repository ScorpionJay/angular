import { Component,OnInit } from '@angular/core'

import { Router } from '@angular/router'


@Component({
		selector:'my-assets',
		templateUrl:'./assets.template.html',
		styleUrls:['./assets.style.css']
})

export class AssetsComponent implements OnInit {
	title = 'assets...'

	constructor(
		private router: Router) {}

	ngOnInit(): void {
		// 判断 链接缓存
		if( !sessionStorage.getItem('token') ){
			this.router.navigate(['/login'])
		}else{
			// 获取数据
		}
		
	}
}