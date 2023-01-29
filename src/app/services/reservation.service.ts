import { Injectable } from "@angular/core";
import { ReservationDTO } from "../interfaces";
import { AlertService } from "./alert.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  constructor(private api: ApiService, private alert: AlertService) {}
  create(data: ReservationDTO) {
    return this.api.post("/addReservation", data).subscribe((res: any) => {
      this.alert.success(
        "Reservation successfully added, Please not reservation ID ::<b> " +
          res.reservationId +
          "</b>"
      );
    }, this.alert.apiFail);
  }

  findById(id: number) {
    return this.api.get(`/viewReservation/${id}`);
  }

  getAll() {
    return this.api.get("/viewAllReservation");
  }

  update(resId: number, data: ReservationDTO) {
    return this.api.put(`/updateReservation/${resId}`, data);
  }

  delete(resId: number) {
    return this.api.delete(`/removeReservation/${resId}`);
  }
}
