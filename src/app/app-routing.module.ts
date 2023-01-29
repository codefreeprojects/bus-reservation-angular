import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";

import { AdminComponent } from "./pages/layouts/admin/admin.component";
import { BasicComponent } from "./pages/layouts/basic/basic.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

import { StaffComponent } from "./pages/layouts/staff/staff.component";

import { AuthGuard } from "./gurds/auth.guard";
import { StaffGuard } from "./gurds/staff.guard";
import { AdminGuard } from "./gurds/admin.guard";
import { AdminLoginPageComponent } from "./pages/admin-login-page/admin-login-page.component";
import { AdminRegisterPageComponent } from "./pages/admin-register-page/admin-register-page.component";
import { AddBusPageComponent } from "./pages/admin/add-bus-page/add-bus-page.component";
import { CustomerDashboardPageComponent } from "./pages/customer/customer-dashboard-page/customer-dashboard-page.component";
import { ReservationPageComponent } from "./pages/customer/reservation-page/reservation-page.component";
import { CustomerFeedbackPageComponent } from "./pages/customer/customer-feedback-page/customer-feedback-page.component";
import { SearchReservationPageComponent } from "./pages/customer/search-reservation-page/search-reservation-page.component";
import { AdminFeedbacksPageComponent } from "./pages/admin/admin-feedbacks-page/admin-feedbacks-page.component";
import { AdminReservationPageComponent } from "./pages/admin/admin-reservation-page/admin-reservation-page.component";
import { RoutesPageComponent } from "./pages/admin/routes-page/routes-page.component";
import { CustomerRoutesPageComponent } from "./pages/customer/customer-routes-page/customer-routes-page.component";

const routes: Routes = [
  {
    path: "",
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      // {
      //   path: "",
      //   component: HomeComponent,
      // },

      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "admin-login",
        component: AdminLoginPageComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "admin-register",
        component: AdminRegisterPageComponent,
      },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    // canActivate: [AuthGuard, AdminGuard],
    // canActivateChild: [AuthGuard, AdminGuard],
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "bus-master",
        component: AddBusPageComponent,
      },
      {
        path: "feedbacks",
        component: AdminFeedbacksPageComponent,
      },
      {
        path: "reservations",
        component: AdminReservationPageComponent,
      },
      {
        path: "routes",
        component: RoutesPageComponent,
      },
    ],
  },
  {
    path: "customer",
    component: StaffComponent,
    // canActivate: [AuthGuard, StaffGuard],
    // canActivateChild: [AuthGuard, StaffGuard],
    children: [
      {
        path: "",
        component: CustomerDashboardPageComponent,
      },
      {
        path: "make-reservation",
        component: ReservationPageComponent,
      },
      {
        path: "track-reservation",
        component: SearchReservationPageComponent,
      },
      {
        path: "feedback",
        component: CustomerFeedbackPageComponent,
      },
      {
        path: "routes",
        component: CustomerRoutesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
