import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NbMenuItem, NbMenuService } from "@nebular/theme";

@Component({
    selector: "app-user-sidebar",
    templateUrl: "./user-sidebar.component.html",
    styleUrls: ["./user-sidebar.component.css"],
})
export class UserSidebarComponent implements OnInit {
    @Output() chosen = new EventEmitter<string>();
    @Input() progress: number;
    @Input() name: string;
    @Input() status: string;
    @Input() menuList: NbMenuItem[];

    constructor(menu: NbMenuService) {
        menu.onItemClick().subscribe(({ item }) => {
            this.chosen.emit(item.title);
        });
    }

    ngOnInit() {}
}
