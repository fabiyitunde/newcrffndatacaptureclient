import { Component, OnInit, ViewChild } from "@angular/core";
import { UnapprovedCertificateRegisterListService } from "./unapprovedcertificateregisterlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-unapprovedcertificateregisterlist",
  templateUrl: "./unapprovedcertificateregisterlist.component.html",
  styleUrls: ["./unapprovedcertificateregisterlist.component.scss"],
  providers: [UnapprovedCertificateRegisterListService]
})
export class UnapprovedcertificateregisterlistComponent implements OnInit {
  recordid: any;
  data: any = {};

  rows = [];
  temp = [];
  columns = [{ name: "name:" }, { prop: "membershipnumber" }];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: UnapprovedCertificateRegisterListService
  ) {}

  ngOnInit() {
    this.service
      .getunapprovedcertificateregisterlist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];
        console.log(result);
        this.rows = result;
      });
  }

  approve(id: any) {
    this.router.navigate(["pages/approvecertificateregisterdetail", id]);
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
