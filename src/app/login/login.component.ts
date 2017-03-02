import { Component,Input } from '@angular/core'

import { Router } from '@angular/router'

@Component({
		selector:'my-login',
		templateUrl:'./login.template.html',
		styleUrls:['./login.style.css']
})

export class LoginComponent {

	constructor(
		private router: Router) {}

	login(username:string,password:string): void {
		console.log(username,password)

		// 验证 调用后台 成功的话缓存起来
		sessionStorage.setItem('token','1231231');

		this.router.navigate(['assets'])

	}

	// 判断是否有没有登录

	goBack(): void {
	    window.history.go(-2);
	}
}