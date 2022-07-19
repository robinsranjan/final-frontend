import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from 'src/app/myComponents/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { BeforeFooterComponent } from './myComponents/before-footer/before-footer.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { ServicePageComponent } from './myComponents/service-page/service-page.component';
import { PrepaidComponent } from './myComponents/prepaid/prepaid.component';
import { PostpaidComponent } from './myComponents/postpaid/postpaid.component';
import { DongleComponent } from './myComponents/dongle/dongle.component';
import { PagenotfoundComponent } from './myComponents/pagenotfound/pagenotfound.component';
import { LoginComponent } from './myComponents/login/login.component';
import { AdminDashboardComponent } from './myComponents/admin-dashboard/admin-dashboard.component';
import { AdminregistrationComponent } from './myComponents/adminregistration/adminregistration.component';
import { AdminloginComponent } from './myComponents/adminlogin/adminlogin.component';
import { AddprepaidplanComponent } from './myComponents/addprepaidplan/addprepaidplan.component';
import { AddpostpaidplanComponent } from './myComponents/addpostpaidplan/addpostpaidplan.component';
import { AdddongleplanComponent } from './myComponents/adddongleplan/adddongleplan.component';
import { PdfComponent } from 'src/app/myComponents/pdf/pdf.component';
import { PaymentComponent } from './myComponents/payment/payment.component';
import { ForgotpasswordComponent } from './myComponents/forgotpassword/forgotpassword.component';
import { VerifyotpComponent } from './myComponents/verifyotp/verifyotp.component';
import { ResetpasswordComponent } from './myComponents/resetpassword/resetpassword.component';
import { UsercontactComponent } from './myComponents/usercontact/usercontact.component';
import { CreateMessageComponent } from './myComponents/create-message/create-message.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeforeFooterComponent,
    FooterComponent,
    HomeComponent,
    ServicePageComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    PagenotfoundComponent,
    SignupComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminregistrationComponent,
    AdminloginComponent,
    AddprepaidplanComponent,
    AddpostpaidplanComponent,
    AdddongleplanComponent,
    PdfComponent,
    PaymentComponent,
    ForgotpasswordComponent,
    VerifyotpComponent,
    ResetpasswordComponent,
    UsercontactComponent,
    CreateMessageComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
