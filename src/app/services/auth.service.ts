import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  AdminLoginDTO,
  AdminRegisterDTO,
  LoginAuthDTO,
  UserRegisterDTO,
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

  register(data: UserRegisterDTO) {
    this.api.post("/addUser", data).subscribe((res: any) => {
      this.alert.success("Registration successful.");
    }, this.alert.apiFail);
  }

  adminRegister(data: AdminRegisterDTO) {
    this.api.post("/addAdmin", data).subscribe((res: any) => {
      this.alert.success("Registration successful.");
    }, this.alert.apiFail);
  }

  login(data: LoginAuthDTO) {
    this.api
      .post("/authenticate", data, {
        responseType: "text",
      })
      .subscribe((res: any) => {
        sessionStorage.setItem("SESSION_TOKEN", res);
        sessionStorage.setItem("SESSION_USER_NAME", data.userName);
        sessionStorage.setItem("SESSION_ROLE", "CUSTOMER");
        this.router.navigateByUrl("/customer");
      }, this.alert.apiFail);
  }

  adminLogin(data: AdminLoginDTO) {
    this.api
      .get(`/adminlogin/${data.adminId}/${data.adminPassword}`, {
        responseType: "text",
      })
      .subscribe((res: any) => {
        console.log(res);
        if (res === "Welcome Admin") {
          sessionStorage.setItem("SESSION_ADMIN_ID", data.adminId.toString());
          sessionStorage.setItem("SESSION_ROLE", "ADMIN");
          this.router.navigateByUrl("/admin");
        } else this.alert.error("Wrong credentials");
      }, this.alert.apiFail);
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

  getUserName() {
    return sessionStorage.getItem("SESSION_USER_NAME");
  }

  userDetails() {
    return this.api.get(`/find/by/${this.getUserName()}`);
  }
}
