import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BusDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { BusService } from "src/app/services/bus.service";

@Component({
  selector: "app-add-bus-page",
  templateUrl: "./add-bus-page.component.html",
  styleUrls: ["./add-bus-page.component.scss"],
})
export class AddBusPageComponent {
  constructor(private alert: AlertService, private bus: BusService) {}

  displayStyle = "none";
  busesList: BusDTO[] = [];

  selectedBus: BusDTO = {
    busId: 0,
    busName: "",
    driverName: "",
    busType: "",
    routeFrom: "",
    routeTo: "",
    arrivalTime: "",
    departureTime: "",
    seats: 0,
    avaiableSeats: 0,
  };

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

    const credentials: BusDTO = ngForm.form.value;
    this.bus.addBus(credentials).subscribe((res: any) => {
      this.alert.success("Bus successfully added");
      this.ngOnInit();
    }, this.alert.apiFail);
    ngForm.resetForm();
  }
  onUpdate(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: BusDTO = ngForm.form.value;
    this.bus.update(credentials.busId, credentials).subscribe((res: any) => {
      this.alert.success("Bus successfully updated");
      this.ngOnInit();
      this.closePopup();
    }, this.alert.apiFail);
  }

  deleteUser(busId: number) {
    this.bus.delete(busId).subscribe((res: any) => {
      this.alert.success("Bus successfully deleted");
      this.ngOnInit();
    }, this.alert.apiFail);
  }

  //MODAL METHODS
  openPopup(b: BusDTO) {
    this.selectedBus = { ...b };
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
