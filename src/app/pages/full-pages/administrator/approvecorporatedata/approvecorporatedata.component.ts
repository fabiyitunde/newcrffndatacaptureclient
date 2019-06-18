import { Component, OnInit, ViewChild } from "@angular/core";
import { ApproveCorporateDataService } from "./approvecorporatedata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-approvecorporatedata",
  templateUrl: "./approvecorporatedata.component.html",
  styleUrls: ["./approvecorporatedata.component.scss"],
  providers: [ApproveCorporateDataService]
})
export class ApprovecorporatedataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};
  state: any = {};

  constructor(
    private service: ApproveCorporateDataService,
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
  return() {
    if (window.confirm("Are you sure you want to return this Record?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.returnrecord(this.data).subscribe(result => {
        alert("Practitioner Detail Returned SuccessFully");
        this.back();
      });
    }
  }

  approve() {
    if (window.confirm("Are you sure you want to Approve?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.approverecord(this.data).subscribe(result => {
        alert("Practitioner detail Approved SuccessFully");
        this.back();
      });
    }
  }
  // edit(id: any) {
  //   this.router.navigate(["pages/updatecorporatedata", id]);
  // }
  back() {
    this.router.navigate(["administrator/unapprovedcorporatelist"]);
  }
}
