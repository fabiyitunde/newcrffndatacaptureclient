import { Component, OnInit, ViewChild } from "@angular/core";
import { UnapprovedCorporateDataListService } from "./unapprovedcorporatelist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
@Component({
  selector: "app-unapprovedcorporatelist",
  templateUrl: "./unapprovedcorporatelist.component.html",
  styleUrls: ["./unapprovedcorporatelist.component.scss"],
  providers: [UnapprovedCorporateDataListService]
})
export class UnapprovedcorporatelistComponent implements OnInit {
  rows = [];
  temp = [];
  columns = [
    { prop: "companyname" },
    { prop: "regid" },
    { prop: "email" },
    { prop: "category" },
    { prop: "stateid" }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private service: UnapprovedCorporateDataListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service
      .getunapprovedcorporatelist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
        console.log(this.rows);
      });
  }

  approve(id: any) {
    this.router.navigate(["administrator/approvecorporatedata", id]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.companyname.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
