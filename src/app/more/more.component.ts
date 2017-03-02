import { Component } from '@angular/core'

@Component({
		selector:'my-more',
		templateUrl:'./more.template.html',
		styleUrls:['./more.style.css']
})

export class MoreComponent {
	title = 'more...'

	// 判断是否有没有登录

	goBack(): void {
	    window.history.back();
	}
}