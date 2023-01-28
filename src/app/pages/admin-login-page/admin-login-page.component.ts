import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { AdminLoginDTO } from "src/app/interfaces";
@Component({
  selector: "app-admin-login-page",
  templateUrl: "./admin-login-page.component.html",
  styleUrls: ["./admin-login-page.component.scss"],
})
export class AdminLoginPageComponent {
  constructor(private alert: AlertService, private auth: AuthService) {}

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: AdminLoginDTO = ngForm.form.value;
    this.auth.adminLogin(credentials);
  }
}
