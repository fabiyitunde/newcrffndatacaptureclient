import { Component, OnInit, ViewChild } from "@angular/core";
import { SubmitCorporateDataService } from "./submitcorporatedata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-submitcorporatedata",
  templateUrl: "./submitcorporatedata.component.html",
  styleUrls: ["./submitcorporatedata.component.scss"],
  providers: [SubmitCorporateDataService]
})
export class SubmitcorporatedataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};
  state: any = {};

  constructor(
    private service: SubmitCorporateDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service.getcorporatedata(this.recordid).subscribe(result => {
        this.item = result;
        this.category = this.item.category;
        this.state = this.item.state;
        console.log(this.item);
      });
    });
  }

  submit() {
    if (window.confirm("Are you sure you want to Submit?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.submitrecord(this.data).subscribe(result => {
        alert("Practitioner detail Submitted SuccessFully");
        this.router.navigate(["pages/unsubmittedcertificateregisterlist"]);
      });
    }
  }
  edit(id: any) {
    this.router.navigate(["pages/editcorporatedata", id]);
  }
  back() {
    this.router.navigate(["pages/unsubmittedcorporatedatalist"]);
  }
}
