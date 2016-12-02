import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { OCRDataService } from './shared/app.ocrDataservices';
import { Configuration } from './shared/app.constants';
import { Routes, RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './shared/app.landingpage.component';
import { IdentityComponent } from './shared/app.identity.component';
import { UserInfoComponent } from './shared/app.userinfo.component';
import { AddressProofComponent } from './shared/app.addressproof.component';
import { SalaryComponent } from './shared/app.salary.component';
import { LoginComponent } from './shared/app.login.component';
import { AdminListComponent } from './shared/app.adminlist.component';
import { UserSubmissionComponent } from './shared/app.userSubmission.component';

const AppRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'identity', component: IdentityComponent },  
  { path: 'userinfo', component: UserInfoComponent },  
  { path: 'address', component: AddressProofComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'loginpage', component: LoginComponent },
  { path: 'adminlist', component: AdminListComponent },
  { path: 'usersubmit', component: UserSubmissionComponent }
];

@NgModule({
  declarations: [
    AppComponent, AddressProofComponent, LandingPageComponent, IdentityComponent, UserInfoComponent, LoginComponent, SalaryComponent, AdminListComponent, UserSubmissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [OCRDataService,Configuration],
  bootstrap: [AppComponent]
})

export class AppModule { }
