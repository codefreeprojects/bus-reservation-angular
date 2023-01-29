import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ReservationDTO, BusDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { BusService } from "src/app/services/bus.service";
import { ReservationService } from "src/app/services/reservation.service";

@Component({
  selector: "app-admin-reservation-page",
  templateUrl: "./admin-reservation-page.component.html",
  styleUrls: ["./admin-reservation-page.component.scss"],
})
export class AdminReservationPageComponent {
  reservationList: ReservationDTO[] = [];
  busesList: BusDTO[] = [];

  displayStyle = "none";
  selectedRes: ReservationDTO = {
    reservationId: 0,
    reservationStatus: "",
    reservationType: "",
    reservationDate: "",
    reservationTime: "",
    source: "",
    destination: "",
    bus: undefined,
  };

  constructor(
    private alert: AlertService,
    private reserv: ReservationService,
    private bus: BusService
  ) {}
  ngOnInit() {
    this.reserv.getAll().subscribe((res) => {
      this.reservationList = res as ReservationDTO[];
    });
    this.bus.getAll().subscribe((res) => {
      this.busesList = res as BusDTO[];
    });
  }

  onUpdate(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: ReservationDTO = ngForm.form.value;
    this.reserv
      .update(this.selectedRes.reservationId as number, this.selectedRes)
      .subscribe((res: any) => {
        this.alert.success("Reservation successfully updated");
        this.ngOnInit();
        this.closePopup();
      }, this.alert.apiFail);
  }

  deleteUser(busId: number | undefined) {
    this.reserv.delete(busId as number).subscribe((res: any) => {
      this.alert.success("Reservation successfully deleted");
      this.ngOnInit();
    }, this.alert.apiFail);
  }

  //MODAL METHODS
  openPopup(b: ReservationDTO) {
    this.selectedRes = { ...b };
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
