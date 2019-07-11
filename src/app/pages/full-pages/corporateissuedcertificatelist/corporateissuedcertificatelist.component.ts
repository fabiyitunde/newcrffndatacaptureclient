import { Component, OnInit, ViewChild } from "@angular/core";
import { CorporateIssuedCertificateService } from "./corporateissuedcertificatelist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
@Component({
  selector: "app-corporateissuedcertificatelist",
  templateUrl: "./corporateissuedcertificatelist.component.html",
  styleUrls: ["./corporateissuedcertificatelist.component.scss"],
  providers: [CorporateIssuedCertificateService]
})
export class CorporateissuedcertificatelistComponent implements OnInit {
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
    private service: CorporateIssuedCertificateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service.getcorporateissuedcertificatelist().subscribe(result => {
      this.temp = [...result];

      this.rows = result;
      // console.log(this.rows);
    });
  }

  capturedata(id: any) {
    this.router.navigate(["pages/createcorporatedata", id]);
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
