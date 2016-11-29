import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { OCRDataService } from './shared/app.ocrDataservices';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './shared/app.landingpage.component';
import { IdentityComponent } from './shared/app.identity.component';
import { UserInfoComponent } from './shared/app.userinfo.component';
import { AddressProofComponent } from './shared/app.addressproof.component';
import { SalaryComponent } from './shared/app.salary.component';
import { LoginComponent } from './shared/app.login.component';
import { AdminListComponent } from './shared/app.adminlist.component';

const AppRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'identity', component: IdentityComponent },  
  { path: 'userinfo', component: UserInfoComponent },  
  { path: 'address', component: AddressProofComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'loginpage', component: LoginComponent },
  { path: 'adminlist', component: AdminListComponent }
];

@NgModule({
  declarations: [
    AppComponent, AddressProofComponent, LandingPageComponent, IdentityComponent, UserInfoComponent, LoginComponent, SalaryComponent, AdminListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [OCRDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
