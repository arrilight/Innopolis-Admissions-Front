import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-candidate-tests",
    templateUrl: "./candidate-tests.component.html",
    styleUrls: ["./candidate-tests.component.css"],
})
export class CandidateTestsComponent implements OnInit {
    tests = [
        { title: "Math", status: "Not taken", result: "-" },
        { title: "CS", status: "Not taken", result: "-" },
        { title: "English", status: "Not taken", result: "-" },
    ];

    constructor() {}

    ngOnInit() {}
}
