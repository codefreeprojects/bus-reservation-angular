import { Injectable } from "@angular/core";
import { BusDTO } from "../interfaces";
import { AlertService } from "./alert.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class BusService {
  constructor(private api: ApiService, private alert: AlertService) {}

  addBus(data: BusDTO) {
    return this.api.post("/addBus", data);
  }

  getAll() {
    return this.api.get("/Bus");
  }
  delete(busId: number) {
    return this.api.delete(`/bus/delete/${busId}`);
  }
  update(busId: number, data: BusDTO) {
    return this.api.put(`/bus/update/${busId}`, data);
  }
}
