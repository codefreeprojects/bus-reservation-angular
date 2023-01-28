import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  AdminLoginDTO,
  ForgotPasswordDTO,
  LoginAuthDTO,
  LoginDTO,
  UserDTO,
} from "../interfaces";
import { AlertService } from "./alert.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private api: ApiService,
    private alert: AlertService,
    private router: Router
  ) {}

  register(data: UserDTO) {
    data.active = true;
    data.id = 0;
    this.api.post("/user/register", data).subscribe((res: any) => {
      this.alert.success("Registration successful.");
    }, this.alert.apiFail);
  }

  login(data: LoginAuthDTO) {
    this.api.post("/authenticate", data).subscribe((res: any) => {
      console.log("res", res);
      sessionStorage.setItem("SESSION_TOKEN", res.response);
      sessionStorage.setItem("SESSION_USER_NAME", data.userName);
      sessionStorage.setItem("SESSION_ROLE", "CUSTOMER");
      this.router.navigateByUrl("/customer");
    }, this.alert.apiFail);
  }

  adminLogin(data: AdminLoginDTO) {
    this.api
      .get(`/adminlogin/${data.adminId}/${data.adminPassword}`)
      .subscribe((res: any) => {
        console.log("res", res);
        sessionStorage.setItem("SESSION_TOKEN", res.response);
        sessionStorage.setItem("SESSION_ADMIN_ID", data.adminId.toString());
        sessionStorage.setItem("SESSION_ROLE", "ADMIN");
        this.router.navigateByUrl("/admin");
      }, this.alert.apiFail);
  }

  forgotPassword(data: ForgotPasswordDTO) {
    this.api
      .post("/user/forgot/password", data)
      .subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

  isLoggedIn() {
    if (
      sessionStorage.getItem("SESSION_TOKEN") &&
      sessionStorage.getItem("SESSION_ROLE") &&
      sessionStorage.getItem("SESSION_EMAIL")
    )
      return true;
    return false;
  }

  isAdmin() {
    if (
      sessionStorage.getItem("SESSION_ROLE") &&
      sessionStorage.getItem("SESSION_ROLE") === "ACM"
    )
      return true;
    return false;
  }

  isStaff() {
    if (
      sessionStorage.getItem("SESSION_ROLE") &&
      sessionStorage.getItem("SESSION_ROLE") === "CUSTOMER"
    )
      return true;
    return false;
  }
}
