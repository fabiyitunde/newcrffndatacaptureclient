import { Component, OnInit, ViewChild } from "@angular/core";
import { CertificateRegisterService } from "./certificateregisterlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-certificateregisterlist",
  templateUrl: "./certificateregisterlist.component.html",
  styleUrls: ["./certificateregisterlist.component.scss"],
  providers: [CertificateRegisterService]
})
export class CertificateregisterlistComponent implements OnInit {
  recordid: any;
  data: any = {};

  rows = [];
  temp = [];
  columns = [{ name: "name:" }, { prop: "membershipnumber" }];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: CertificateRegisterService
  ) {}

  ngOnInit() {
    this.service
      .getcertificateregisterlist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
      });
  }

  detail(id: any) {
    this.router.navigate(["pages/updatecertificateregister", id]);
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
