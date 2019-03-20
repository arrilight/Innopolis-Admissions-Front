import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-candidate-page",
    templateUrl: "./candidate-page.component.html",
    styleUrls: ["./candidate-page.component.css"],
})
export class CandidatePageComponent implements OnInit {
    items = [
        { title: "Notification 1" },
        { title: "A looooong text of a notification" },
        { title: "Notification 2" },
    ];

    currentSubPage = "Documents";

    constructor() {}

    ngOnInit() {}

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
