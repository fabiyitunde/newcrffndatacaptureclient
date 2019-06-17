import { Component, OnInit, ViewChild } from "@angular/core";
import { CorporatedetailService } from "./corporatedetail.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-corporatedetail",
  templateUrl: "./corporatedetail.component.html",
  styleUrls: ["./corporatedetail.component.scss"],
  providers: [CorporatedetailService]
})
export class CorporatedetailComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private service: CorporatedetailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service
        .getcorporatefreightforwardersdetail(this.recordid)
        .subscribe(result => {
          this.data = result;
          console.log(this.data);
        });
    });
  }

  submit() {
    this.item.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
    this.item.mongo_id = this.recordid;
    this.item.companyname = this.data.companyname;
    this.item.membershipnumber = this.data.membershipnumber;
    this.service.saverecord(this.item).subscribe(result => {
      alert("Record Saved SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/corporateforwarderslist"]);
  }
}
