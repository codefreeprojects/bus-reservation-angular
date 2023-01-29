import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BusDTO, ReservationDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { BusService } from "src/app/services/bus.service";
import { ReservationService } from "src/app/services/reservation.service";

@Component({
  selector: "app-reservation-page",
  templateUrl: "./reservation-page.component.html",
  styleUrls: ["./reservation-page.component.scss"],
})
export class ReservationPageComponent {
  constructor(
    private alert: AlertService,
    private bus: BusService,
    private reservationSer: ReservationService
  ) {}

  busesList: BusDTO[] = [];

  ngOnInit() {
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

    const credentials: ReservationDTO = {
      ...ngForm.form.value,
      bus: this.getBusById(+ngForm.form.value.bus),
      reservationTime: ngForm.form.value.reservationTime + ":00",
      reservationId: Math.floor(Math.random() * 100000000),
    };

    this.reservationSer.create(credentials);
    ngForm.resetForm();
  }

  getBusById(busId: number) {
    return this.busesList.filter((item) => item.busId === busId)[0];
  }
}
