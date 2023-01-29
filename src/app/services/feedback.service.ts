import { Injectable } from "@angular/core";
import { FeedbackDTO } from "../interfaces";
import { AlertService } from "./alert.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  constructor(private api: ApiService, private alert: AlertService) {}

  getAll() {
    return this.api.get("/viewAllFeedBack");
  }

  create(feedback: FeedbackDTO) {
    return this.api.post("/addFeedBack", feedback);
  }
}
