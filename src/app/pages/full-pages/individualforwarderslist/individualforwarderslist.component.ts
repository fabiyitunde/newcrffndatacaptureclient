import { Component, OnInit, ViewChild } from "@angular/core";
import { IndividualService } from "./individualforwarderslist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-individualforwarderslist",
  templateUrl: "./individualforwarderslist.component.html",
  styleUrls: ["./individualforwarderslist.component.scss"],
  providers: [IndividualService]
})
export class IndividualforwarderslistComponent implements OnInit {
  recordid: any;
  data: any = {};
  isDataEntry: boolean;
  rows = [];
  temp = [];
  columns = [
    { name: "surname" },
    { prop: "firstname" },
    { prop: "middlename" },
    { prop: "membershipnumber" }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: IndividualService
  ) {}

  ngOnInit() {
    this.service.getindividuallist().subscribe(result => {
      this.temp = [...result];

      this.rows = result;
    });
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));

    var user: any = {};
    if (userInfo === null) {
      this.isDataEntry = true;
    } else {
      user = userInfo.user;
      if (user.usertype === 1) {
        this.isDataEntry = false;
      } else {
        this.isDataEntry = true;
      }
    }
  }

  detail(id: any) {
    this.router.navigate(["pages/individualdetail", id]);
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
