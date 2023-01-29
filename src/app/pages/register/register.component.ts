import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { UserRegisterDTO } from "src/app/interfaces";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public roles: string[] = ["ACM", "APPLICANT", "STAFF"];
  constructor(private alert: AlertService, private auth: AuthService) {}

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    console.log("ngForm", ngForm.form.value);

    const credentials: UserRegisterDTO = {
      ...ngForm.form.value,
      reservation: null,
      userLoginId: 0,
    };
    this.auth.register(credentials);
    ngForm.resetForm();
  }
}
