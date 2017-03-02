import { Component, OnInit} from '@angular/core'

import { Data } from './data';
import { HomeService } from './home.service';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
@Component({
		selector:'my-home',
		templateUrl:'./home.template.html',
		styleUrls:['./home.style.css']
})

export class HomeComponent implements OnInit{
	title = '首页...'

	datas:Data[]

	swipeOptions: any

	slides: any

	constructor(
		private homeService: HomeService) {}

		

	ngOnInit(): void {
		// this.homeService.getHeroes()
		// 				.then(
		// 					heroes => {this.heroes = heroes//.slice(1,5)
		// 					console.log(heroes)
		// 				}
		//				)

		this.slides = [
			    {
			    	"link":"https://github.com",
			    	"img":"https://static.lufaxcdn.com/wcm-images/5GbQZmvn0OKbrgQ80IeMqA.png"
			    },
			    {
			    	"link":"https://github.com",
			    	"img":"https://static.lufaxcdn.com/wcm-images/mtPTXc8HCQIVSdbI-p3Ujw.png"
			    },
			    {
			    	"link":"https://github.com",
			    	"img":"https://static.lufaxcdn.com/wcm-images/0y44GG-RHYJmEHx6UFqIwQ.png"
			    }
		] 

		this.swipeOptions = {
	      loop: true,
	      autoplay:5000,
	      speed: 400,
	      pagination: '.swiper-pagination',
	      autoHeight:true
	    }

		this.datas = [
			{id:1,type:'jj',name:'基金',color:'red'},
			{id:2,type:'gp',name:'股票',color:'yellow'},
			{id:3,type:'qh',name:'期货',color:'#4a2bf5'},
			{id:4,type:'zq',name:'债券',color:'blue'},
			{id:5,type:'zr',name:'转让',color:'black'},
			{id:6,type:'cp',name:'彩票',color:'gray'}
		]
	}

	gotoDetail(hero:Data):void {
		// let link = ['/detail',hero.id]
		// this.router.navigate(link)
	}

}