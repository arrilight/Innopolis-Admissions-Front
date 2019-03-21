import { Component, OnInit } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
    selector: "app-manager-page",
    templateUrl: "./manager-page.component.html",
    styleUrls: ["./manager-page.component.css"],
})
export class ManagerPageComponent implements OnInit {
    items = [
        { title: "Notification 1" },
        { title: "A looooong text of a notification" },
        { title: "Notification 2" },
    ];

    testsInPull = [
        { title: "Math", status: "Not taken", result: "-" },
        { title: "CS", status: "Not taken", result: "-" },
        { title: "English", status: "Not taken", result: "-" },
    ];

    assignedTests = [
        { title: "Math", status: "Not taken", result: "-" },
        { title: "CS", status: "Not taken", result: "-" },
    ];

    menuList: NbMenuItem[] = [
        {
            icon: "fas fa-users",
            title: "  Candidates",
            link: "",
        },
        {
            icon: "fas far fa-edit",
            title: "  Tests",
            link: "",
        },
        {
            icon: "fas fa-graduation-cap",
            title: "  Professors",
            link: "",
        },
    ];

    currentSubPage = "Profile information";

    constructor() {}

    ngOnInit() {}

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
