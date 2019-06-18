import { Component, OnInit, ViewChild } from "@angular/core";
import { UnapprovedIndividualDataListService } from "./unapprovedindividuallist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
@Component({
  selector: "app-unapprovedindividuallist",
  templateUrl: "./unapprovedindividuallist.component.html",
  styleUrls: ["./unapprovedindividuallist.component.scss"],
  providers: [UnapprovedIndividualDataListService]
})
export class UnapprovedindividuallistComponent implements OnInit {
  rows = [];
  temp = [];
  columns = [{ prop: "surname" }, { prop: "category" }, { prop: "stateid" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private service: UnapprovedIndividualDataListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service
      .getunapprovedindividuallist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
        console.log(this.rows);
      });
  }

  approve(id: any) {
    this.router.navigate(["administrator/approveindividualdata", id]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.surname.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
