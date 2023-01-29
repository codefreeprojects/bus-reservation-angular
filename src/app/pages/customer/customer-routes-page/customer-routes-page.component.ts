import { Component } from "@angular/core";
import { BusDTO, RouteDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { BusService } from "src/app/services/bus.service";
import { RouteService } from "src/app/services/route.service";

@Component({
  selector: "app-customer-routes-page",
  templateUrl: "./customer-routes-page.component.html",
  styleUrls: ["./customer-routes-page.component.scss"],
})
export class CustomerRoutesPageComponent {
  constructor(
    private alert: AlertService,
    private bus: BusService,
    private routeServic: RouteService
  ) {}

  displayStyle = "none";
  busesList: BusDTO[] = [];
  routesList: RouteDTO[] = [];

  ngOnInit() {
    this.routeServic.getAll().subscribe((res) => {
      this.routesList = res as RouteDTO[];
    });
  }

  openPopup(b: BusDTO[]) {
    this.busesList = [...b];
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
