import { Component, OnInit, ViewChild } from "@angular/core";
import { UnsubmittedCertificateRegisterListService } from "./unsubmittedcertificateregisterlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-unsubmittedcertificateregisterlist",
  templateUrl: "./unsubmittedcertificateregisterlist.component.html",
  styleUrls: ["./unsubmittedcertificateregisterlist.component.scss"],
  providers: [UnsubmittedCertificateRegisterListService]
})
export class UnsubmittedcertificateregisterlistComponent implements OnInit {
  recordid: any;
  data: any = {};

  rows = [];
  temp = [];
  columns = [{ name: "name:" }, { prop: "membershipnumber" }];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: UnsubmittedCertificateRegisterListService
  ) {}

  ngOnInit() {
    this.service
      .getunsubmittedcertificateregisterlist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
      });
  }

  detail(id: any) {
    this.router.navigate(["pages/submitcertificateregisterdetail", id]);
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
