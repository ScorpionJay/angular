import { ModuleWithProviders }  from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FindComponent } from './find/find.component'
import { MeComponent } from './me/me.component'
import { MoreComponent }  from './more/more.component'

import { InvestComponent } from './invest/invest.component'
import { InvestListComponent } from './invest/list/investList.component'
import { AssetsComponent } from './assets/assets.component'


import { LoginComponent }  from './login/login.component'


const appRoutes: Routes = [
	{
		path:'',
		redirectTo:'/home',
		pathMatch:'full'
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'find',
		component: FindComponent
	},
	{
		path:'me',
		component: MeComponent
	},
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'more',
		component: MoreComponent
	},
	{
		path:'invest',
		component: InvestComponent
	},
	{
		path:'invest/:type',
		component: InvestListComponent
	},
	{
		path:'assets',
		component: AssetsComponent
	}

]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)