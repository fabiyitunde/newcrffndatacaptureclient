import { Component, OnInit, ViewChild } from "@angular/core";
import { UnissuedCertificateListService } from "./unissuedcertificatelist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-unissuedcertificatelist",
  templateUrl: "./unissuedcertificatelist.component.html",
  styleUrls: ["./unissuedcertificatelist.component.scss"],
  providers: [UnissuedCertificateListService]
})
export class UnissuedcertificatelistComponent implements OnInit {
  recordid: any;
  data: any = {};

  rows = [];
  temp = [];
  columns = [{ name: "name:" }, { prop: "membershipnumber" }];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: UnissuedCertificateListService
  ) {}

  ngOnInit() {
    this.getunissuedlist();
  }
  getunissuedlist() {
    this.service
      .getunsubmittedcertificateregisterlist(
        JSON.parse(localStorage.getItem("userinfo")).user.id
      )
      .subscribe(result => {
        this.temp = [...result];

        this.rows = result;
      });
  }

  issue(id: any) {
    if (window.confirm("Are you sure you want to Issue Certificate?")) {
      this.data.membershipnumber = id;
      this.service.issuecertificate(this.data).subscribe(result => {
        alert("Certificate Issued");
        this.service
          .getunsubmittedcertificateregisterlist(
            JSON.parse(localStorage.getItem("userinfo")).user.id
          )
          .subscribe(result => {
            this.temp = [...result];

            this.rows = result;
          });
        this.getunissuedlist();
      });
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;

    this.table.offset = 0;
  }
}
