import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ReservationDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { ReservationService } from "src/app/services/reservation.service";

@Component({
  selector: "app-search-reservation-page",
  templateUrl: "./search-reservation-page.component.html",
  styleUrls: ["./search-reservation-page.component.scss"],
})
export class SearchReservationPageComponent {
  resevationInfo: ReservationDTO | null = null;
  constructor(
    private alert: AlertService,

    private reservationSer: ReservationService
  ) {}

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    console.log(ngForm.form.value);

    this.reservationSer
      .findById(+ngForm.form.value.reservationid)
      .subscribe((res: any) => {
        if (res?.reservationId) this.resevationInfo = res as ReservationDTO;
        else this.alert.error("Result not found.");
      }, this.alert.apiFail);
    ngForm.resetForm();
  }
}
