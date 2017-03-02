import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { HomeService } from './home/home.service'
import { routing } from './app.routing'
import { HomeComponent }  from './home/home.component'
import { FindComponent }  from './find/find.component'
import { MeComponent }  from './me/me.component'
import { MoreComponent }  from './more/more.component'
import { LoginComponent }  from './login/login.component'
import { InvestComponent } from './invest/invest.component'
import { InvestService } from './invest/invest.service'
import { InvestListComponent } from './invest/list/investList.component'
import { InvestListService } from './invest/list/investList.service'
import { AssetsComponent } from './assets/assets.component'
import { NavComponent } from './common/nav.component'
import { TabComponent } from './common/tab.component'

import {KSSwiperModule} from 'angular2-swiper';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	//InMemoryWebApiModule.forRoot(InMemoryDataService),
  	routing,
    KSSwiperModule
  ],
  declarations: [ AppComponent,
    HomeComponent,
    FindComponent,
    MeComponent,
    NavComponent,
    TabComponent,
    InvestComponent,
    InvestListComponent,
    AssetsComponent,
    MoreComponent,
    LoginComponent
  ],
  providers:[
    HomeService,
    InvestService,
    InvestListService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
