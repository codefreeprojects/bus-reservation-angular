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
import { AdminLoginPageComponent } from "./pages/admin-login-page/admin-login-page.component";
import { AdminRegisterPageComponent } from "./pages/admin-register-page/admin-register-page.component";
import { AddBusPageComponent } from "./pages/admin/add-bus-page/add-bus-page.component";
import { FeedbacksComponent } from "./pages/admin/feedbacks/feedbacks.component";
import { RoutesPageComponent } from "./pages/admin/routes-page/routes-page.component";
import { CustomerDashboardPageComponent } from "./pages/customer/customer-dashboard-page/customer-dashboard-page.component";
import { ReservationPageComponent } from "./pages/customer/reservation-page/reservation-page.component";
import { CustomerFeedbackPageComponent } from "./pages/customer/customer-feedback-page/customer-feedback-page.component";
import { BusService } from "./services/bus.service";
import { ReservationService } from "./services/reservation.service";
import { FeedbackService } from "./services/feedback.service";
import { SearchReservationPageComponent } from "./pages/customer/search-reservation-page/search-reservation-page.component";
import { AdminFeedbacksPageComponent } from "./pages/admin/admin-feedbacks-page/admin-feedbacks-page.component";
import { AdminReservationPageComponent } from "./pages/admin/admin-reservation-page/admin-reservation-page.component";
import { RouteService } from "./services/route.service";
import { CustomerRoutesPageComponent } from './pages/customer/customer-routes-page/customer-routes-page.component';

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
    AddBusPageComponent,
    FeedbacksComponent,
    RoutesPageComponent,
    CustomerDashboardPageComponent,
    ReservationPageComponent,
    CustomerFeedbackPageComponent,
    SearchReservationPageComponent,
    AdminFeedbacksPageComponent,
    AdminReservationPageComponent,
    CustomerRoutesPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    BusService,
    ReservationService,
    FeedbackService,
    RouteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
