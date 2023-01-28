import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-admin-register-page",
  templateUrl: "./admin-register-page.component.html",
  styleUrls: ["./admin-register-page.component.scss"],
})
export class AdminRegisterPageComponent {
  constructor(private alert: AlertService) {}
  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
  }
}
