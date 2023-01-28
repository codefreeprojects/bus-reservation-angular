import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginAuthDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public roles: string[] = ["ACM", "APPLICANT", "STAFF"];
  constructor(private alert: AlertService, private auth: AuthService) {}

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: LoginAuthDTO = ngForm.form.value;
    this.auth.login(credentials);
  }
}
