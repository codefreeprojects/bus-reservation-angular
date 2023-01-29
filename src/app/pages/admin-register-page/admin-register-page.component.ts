import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AdminRegisterDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin-register-page",
  templateUrl: "./admin-register-page.component.html",
  styleUrls: ["./admin-register-page.component.scss"],
})
export class AdminRegisterPageComponent {
  constructor(private alert: AlertService, private auth: AuthService) {}
  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: AdminRegisterDTO = ngForm.form.value;
    this.auth.adminRegister(credentials);
    ngForm.resetForm();
  }
}
