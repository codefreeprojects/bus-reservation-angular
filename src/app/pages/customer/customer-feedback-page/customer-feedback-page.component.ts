import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BusDTO, FeedbackDTO, UserRegisterDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { BusService } from "src/app/services/bus.service";
import { FeedbackService } from "src/app/services/feedback.service";

@Component({
  selector: "app-customer-feedback-page",
  templateUrl: "./customer-feedback-page.component.html",
  styleUrls: ["./customer-feedback-page.component.scss"],
})
export class CustomerFeedbackPageComponent {
  constructor(
    private alert: AlertService,
    private feedSev: FeedbackService,
    private auth: AuthService,
    private bus: BusService
  ) {}

  userDetails: UserRegisterDTO | null = null;
  busesList: BusDTO[] = [];

  ngOnInit() {
    this.auth.userDetails().subscribe((res) => {
      this.userDetails = res as UserRegisterDTO;
    });
    this.bus.getAll().subscribe((res) => {
      this.busesList = res as BusDTO[];
    });
  }
  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    console.log(ngForm.form.value);

    const credentials: FeedbackDTO = {
      ...ngForm.form.value,
      bus: this.getBusById(+ngForm.form.value.bus),
      user: this.userDetails,
      feedBackId: Math.floor(Math.random() * 10000000),
    };

    this.feedSev.create(credentials).subscribe((res) => {
      this.alert.success(
        "Feedback added, Feedback id is : <b>" + credentials.feedBackId + "</b>"
      );
    }, this.alert.apiFail);
    ngForm.resetForm();
  }

  getBusById(busId: number) {
    return this.busesList.filter((item) => item.busId === busId)[0];
  }
}
