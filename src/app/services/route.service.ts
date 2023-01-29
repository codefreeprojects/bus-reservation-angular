import { Injectable } from "@angular/core";
import { RouteDTO } from "../interfaces";
import { AlertService } from "./alert.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class RouteService {
  constructor(private api: ApiService, private alert: AlertService) {}
  create(data: RouteDTO) {
    return this.api.post("/addRoute", data);
  }

  getAll() {
    return this.api.get("/route/all");
  }
  delete(routeId: number) {
    return this.api.delete(`/route/delete/${routeId}`);
  }
  update(routeId: number, data: RouteDTO) {
    return this.api.put(`/route/update/${routeId}`, data);
  }
}
