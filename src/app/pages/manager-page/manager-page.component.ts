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

    menuList: NbMenuItem[] = [
        {
            icon: "fas fa-file-invoice",
            title: "Candidates",
            link: "",
        },
        {
            icon: "fas far fa-edit",
            title: "Tests",
            link: "",
        },
        {
            icon: "fas fa-user",
            title: "Professors",
            link: "",
        },
    ];
    ß;

    currentSubPage = "Documents";

    constructor() {}

    ngOnInit() {}

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
