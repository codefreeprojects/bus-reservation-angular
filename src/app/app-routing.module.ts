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
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "admin-register",
        component: RegisterComponent,
      },
    ],
  },
  // {
  //   path: "admin",
  //   component: AdminComponent,
  //   canActivate: [AuthGuard, AdminGuard],
  //   canActivateChild: [AuthGuard, AdminGuard],
  //   children: [
  //     {
  //       path: "",
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: "courses",
  //       component: CoursesComponent,
  //     },
  //     {
  //       path: "add-staff",
  //       component: AddStaffComponent,
  //     },
  //     {
  //       path: "add-admission",
  //       component: AdmissionPageComponent,
  //     },
  //   ],
  // },
  // {
  //   path: "customer",
  //   component: StaffComponent,
  //   canActivate: [AuthGuard, StaffGuard],
  //   canActivateChild: [AuthGuard, StaffGuard],
  //   children: [
  //     {
  //       path: "",
  //       component: StaffDashboardComponent,
  //     },
  //     {
  //       path: "courses",
  //       component: CoursesComponent,
  //     },
  //     {
  //       path: "add-admission",
  //       component: AdmissionPageComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
