import { Component, OnInit } from "@angular/core";
import { InterviewInterface } from "../../../interfaces/interview-interface";

@Component({
    selector: "app-candidate-interviews",
    templateUrl: "./candidate-interviews.component.html",
    styleUrls: ["./candidate-interviews.component.css"],
})
export class CandidateInterviewsComponent implements OnInit {
    public interview: InterviewInterface;

    constructor() {
        this.interview = {
            interviewer: {
                name: "Mr Dr Prof",
                surname: "Vorbob",
                role: "staff",
                photo:
                    "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            },
            datetime: new Date("2019-04-01T09:05:05.035Z"),
        };
    }

    ngOnInit() {}
}
