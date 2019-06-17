import { Component, OnInit, ViewChild } from "@angular/core";
import { CorporateService } from "./corporateforwarderslist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-corporateforwarderslist",
  templateUrl: "./corporateforwarderslist.component.html",
  styleUrls: ["./corporateforwarderslist.component.scss"],
  providers: [CorporateService]
})
export class CorporateforwarderslistComponent implements OnInit {
  recordid: any;
  data: any = {};

  rows = [];
  temp = [];
  columns = [{ prop: "companyname:" }, { name: "membershipnumber" }];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: CorporateService
  ) {}

  ngOnInit() {
    this.service.getcorporateforwarderlist().subscribe(result => {
      this.temp = [...result];

      this.rows = result;
    });
  }

  detail(id: any) {
    this.router.navigate(["pages/corporatedetail", id]);
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
  membershipIDFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.membershipnumber.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
