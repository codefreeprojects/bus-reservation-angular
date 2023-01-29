import { Component } from "@angular/core";
import { FeedbackDTO } from "src/app/interfaces";
import { AlertService } from "src/app/services/alert.service";
import { FeedbackService } from "src/app/services/feedback.service";

@Component({
  selector: "app-admin-feedbacks-page",
  templateUrl: "./admin-feedbacks-page.component.html",
  styleUrls: ["./admin-feedbacks-page.component.scss"],
})
export class AdminFeedbacksPageComponent {
  feedbackList: FeedbackDTO[] = [];

  constructor(private alert: AlertService, private feed: FeedbackService) {}
  ngOnInit() {
    this.feed.getAll().subscribe((res) => {
      this.feedbackList = res as FeedbackDTO[];
    });
  }
}
