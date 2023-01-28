import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialExampleModule } from "src/material.module";
import { FormsModule } from "@angular/forms";
import { AlertService } from "./services/alert.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { AuthService } from "./services/auth.service";
import { BasicComponent } from "./pages/layouts/basic/basic.component";
import { AdminComponent } from "./pages/layouts/admin/admin.component";
import { StaffComponent } from "./pages/layouts/staff/staff.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { AdminLoginPageComponent } from './pages/admin-login-page/admin-login-page.component';
import { AdminRegisterPageComponent } from './pages/admin-register-page/admin-register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    BasicComponent,
    AdminComponent,
    StaffComponent,
    DashboardComponent,
    AdminLoginPageComponent,
    AdminRegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
  ],
  providers: [AlertService, ApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
