import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BusDTO, RouteDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { BusService } from "src/app/services/bus.service";
import { RouteService } from "src/app/services/route.service";

@Component({
  selector: "app-routes-page",
  templateUrl: "./routes-page.component.html",
  styleUrls: ["./routes-page.component.scss"],
})
export class RoutesPageComponent {
  constructor(
    private alert: AlertService,
    private bus: BusService,
    private routeServic: RouteService
  ) {}
  displayStyle = "none";
  busesList: BusDTO[] = [];
  routesList: RouteDTO[] = [];

  ngOnInit() {
    this.bus.getAll().subscribe((res) => {
      this.busesList = res as BusDTO[];
      console.log("first", this.getBusById([33]));
    });
    this.routeServic.getAll().subscribe((res) => {
      this.routesList = res as RouteDTO[];
    });
  }
  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    const credentials: RouteDTO = {
      ...ngForm.form.value,
      bus: this.getBusById(ngForm.form.value.bus) as BusDTO[],
    };
    this.routeServic.create(credentials).subscribe((res: any) => {
      this.alert.success("Route successfully added");
      this.ngOnInit();
    }, this.alert.apiFail);
    ngForm.resetForm();
  }

  deleteUser(busId: number) {
    this.routeServic.delete(busId).subscribe((res: any) => {
      this.alert.success("Route successfully deleted");
      this.ngOnInit();
    }, this.alert.apiFail);
  }

  getBusById(busIds: number[]) {
    return this.busesList.filter((item) => busIds.includes(item.busId));
  }
}
