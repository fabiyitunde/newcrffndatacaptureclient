import { Component, OnInit, ViewChild } from "@angular/core";
import { UnsubmittedIndividualDataListService } from "./unsubmittedindividualdatalist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
@Component({
  selector: "app-unsubmittedindividualdatalist",
  templateUrl: "./unsubmittedindividualdatalist.component.html",
  styleUrls: ["./unsubmittedindividualdatalist.component.scss"],
  providers: [UnsubmittedIndividualDataListService]
})
export class UnsubmittedindividualdatalistComponent implements OnInit {
  rows = [];
  temp = [];
  columns = [
    { prop: "name" },
    { prop: "regid" },
    { prop: "email" },
    { prop: "category" },
    { prop: "stateid" }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private service: UnsubmittedIndividualDataListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service
      .getunsubmittedindividuallist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
      });
  }

  submit(id: any) {
    this.router.navigate(["pages/submitindividualdata", id]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
