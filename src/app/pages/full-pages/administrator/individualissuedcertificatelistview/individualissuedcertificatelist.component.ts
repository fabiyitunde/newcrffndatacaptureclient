import { Component, OnInit, ViewChild } from "@angular/core";
import { IndividualIssuedCertificateListService } from "./individualissuedcertificatelist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
@Component({
  selector: "app-individualissuedcertificatelist",
  templateUrl: "./individualissuedcertificatelist.component.html",
  styleUrls: ["./individualissuedcertificatelist.component.scss"],
  providers: [IndividualIssuedCertificateListService]
})
export class IndividualissuedcertificatelistviewComponent implements OnInit {
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
    private service: IndividualIssuedCertificateListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service.getindividualissuedcertificatelist().subscribe(result => {
      this.temp = [...result];

      this.rows = result;
      console.log(this.rows);
    });
  }

  capturedata(id: any) {
    this.router.navigate(["pages/createindividualdata", id]);
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
